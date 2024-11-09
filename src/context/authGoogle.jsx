import { app } from "../service/firebaseconfig.jsx";
import { Navigate } from "react-router-dom";

import "firebase/firestore";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";

import {
    getFirestore,
    doc,
    deleteDoc,
    getDoc,
    getDocs,
    setDoc,
    collection,

} from "firebase/firestore";


import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

import { toast } from 'react-toastify';

const provider = new GoogleAuthProvider();

export const AuthGoogleProvider = ({ children }) => {

    const db = getFirestore(app);
    const auth = getAuth(app);
    const storage = getStorage(app)

    const userRef = collection(db, "users")

    const storageToken = localStorage.getItem("@AuthFirebase:token");

    const storageUser = JSON.parse(localStorage.getItem("@AuthFirebase:user"))
    const [user, setUser] = useState(storageUser);
    

    useEffect(() => {
        if (storageToken && storageUser) {
            setUser(storageUser); 
            // console.log(children)
        }
    }, [storageToken]);

    async function checkUser(u) {
        const docSnap = await getDoc(doc(userRef, u.uid));

        if (!docSnap.exists() || u.displayName != docSnap.displayName) {

            setDoc(doc(userRef, u.uid), {
                username: u.displayName || "user",
            })
        }
    }

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);

                const token = credential.accessToken;
                const u = result.user;

                setUser(u);
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(u));
                localStorage.setItem("@AuthFirebase:token", token);

                console.log(u);

                checkUser(u)

            })
            .catch((error) => {
                //console.log(errorMessage)
            });
        return <Navigate to="/" />;
    };

    const createAccount = async (username, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const u = result.user;

                if (username != '') {
                    updateProfile(u, {
                        displayName: username,
                    })
                }

                checkUser(u)

                console.log(u);
            })
            .catch((error) => {
                const errorCode = error.code;
                // ..
                if (errorCode == "auth/invalid-email")
                    toast.error("Email ou senha Inválidos");

                console.log(error);
            });
    };

    const signInAccount = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                // Signed in
                const u = result.user;
                const token = u.accessToken;

                setUser(u);
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(u));
                localStorage.setItem("@AuthFirebase:token", token);

                console.log(u);

                checkUser(u)

            })
            .catch((error) => {
                //console.log(errorMessage)
            });

        /* return <Navigate to="/" />; */
    };

    function signOut() {
        document.cookie = `city=;Secure`;
        localStorage.clear();
        setUser(null);

        return <Navigate to="/" />;
    }

/*     const xgUser = async (nome) => {

        await updateProfile(auth.currentUser, {
            displayName: nome
        })


        setUser(auth.currentUser)
        localStorage.setItem("@AuthFirebase:user", JSON.stringify(auth.currentUser));
        checkUser(auth.currentUser)

        console.log('Success')
        toast.success('Nome de usuário alterado')
    } */

    return (
        <AuthGoogleContext.Provider
            value={{
                user,
                signed: !!user,

                signInGoogle,
                createAccount,
                signInAccount,
                signOut,
            }}
        >
            {children}
        </AuthGoogleContext.Provider>
    );
};

export const AuthGoogleContext = createContext({});