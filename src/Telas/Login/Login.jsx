import "./Login.css"
import { useState, useContext, useEffect } from "react"

import { AuthGoogleContext } from "../../context/authGoogle"

function Login() {
    const { createAccount, signInAccount, signInGoogle } = useContext(AuthGoogleContext)

    const [user, setUser] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [active, setActive] = useState(false)

    async function login() {
        signInAccount(email, password)
    }

    async function register() {
        await createAccount(user, email, password)
    }

    const handleActive = () => {
        active ? setActive(false) : setActive(true)
        /* if(active){

        } else {
            emailField.focus()
        } */
    }

    return (
        <div id="LoginCont">
            <div className={` container ${active ? " active" : ""}`} id="container">
                <div className="form-container sign-up">
                    <div /*action="register.php" method="POST"*/>
                        <h1>Criar Conta</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <i className="fa-brands fa-google-plus-g"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>ou use seu e-mail para registro</span>

                         <input
                            autoFocus
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            name="nome"
                            id="userField"
                            placeholder="Nome"
                            required
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            id="emailField"
                            placeholder="E-mail"
                            required
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                
                                if (e.key == "Enter") register()
                                
                            }}
                            name="senha"
                            id="passwordField"
                            placeholder="Senha"
                            required
                        />

                        <button className="laranja" /* type="submit" */ onClick={register}>
                            Registrar
                        </button>
                    </div>
                </div>

                <div className="form-container sign-in">
                    <div /* action="login.php" method="POST" */>
                        <h1>Entrar</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <i className="fa-brands fa-google-plus-g"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>ou use seu e-mail e senha</span>

                        <input
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="emailField"
                            name="email"
                            placeholder="E-mail"
                            required
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                
                                if (e.key == "Enter") login()
                                
                            }}
                            id="passwordField"
                            name="senha"
                            placeholder="Senha"
                            required
                        />
                        <a href="#">Esqueceu sua senha?</a>

                        <button className="laranja" /* type="submit" */ onClick={() => login}>
                            Entrar
                        </button>
                    </div>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Seja Bem-vindo !</h1>
                            <p>Insira seus dados para utilizar todas as funcionalidades do site</p>
                            <button className="hidden" id="login" onClick={() => handleActive()}>
                                Entrar
                            </button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Olá, Amigo!</h1>
                            <p>Registre-se com seus dados para utilizar todas as funcionalidades do site</p>
                            <button className="hidden" id="register" onClick={() => handleActive()}>
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
