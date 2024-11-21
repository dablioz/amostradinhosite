import { PureComponent } from "react";
import { Concurso } from "./Concurso";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../service/firebaseConfig.jsx";

const db = getFirestore(app);
const concursosRef = collection(db, "concursos");

class LoadConcursos extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            concursos: [],
        };

        this.vai = this.vai.bind(this);
        this.agrsim = this.agrsim.bind(this);
    }

    componentDidMount() {
        this.vai();
    }

    async vai() {
        const querySnapshot = await getDocs(concursosRef);

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            this.setState((prevState) => ({
                concursos: [...prevState.concursos, doc.data()],
            }));
        });
    }

    agrsim() {
        return this.state.concursos.map((item, i) => (
            <Concurso key={i} items={item} />
        ));
    }

    render() {
        return <div>{this.agrsim()}</div>;
    }
}

export default LoadConcursos;
