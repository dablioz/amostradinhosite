import { PureComponent } from "react"
import { Concurso } from "./Concurso"
import { collection, getDocs, getFirestore, query } from "firebase/firestore"
import { app } from "../../service/firebaseconfig.jsx"

import SearchIcon from "@mui/icons-material/Search"
import Fuse from "fuse.js"
import * as React from "react"
const db = getFirestore(app)
const concursosRef = collection(db, "concursos")

class LoadConcursos extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            concursos: [],
            query: [],
        }
        this.pesquisa = this.pesquisa.bind(this)
        this.load = this.load.bind(this)
    }

    async componentDidMount() {
        const querySnapshot = await getDocs(concursosRef)

        querySnapshot.forEach((doc) => {
            // console.log(doc.data())
            this.setState((prevState) => ({
                concursos: [...prevState.concursos, doc.data()],
            }))
        })
    } 

    pesquisa() {
        const ai = input.value

        if (ai != "") {
            const options = {
                minCharLength: 2,
                isCaseSensitive: false,
                threshold: 0.5,
                keys: ["title", "banca"],
            }

            const fuse = new Fuse(this.state.concursos, options).search(ai)
            this.setState({ query: fuse })
        } else {
            this.setState({ query: [] })
        }
    }

    load() {
        if (this.state.query.length > 0) {
            return this.state.query.map((item, i) => <Concurso key={i} items={item.item} />)
        } else {
            return this.state.concursos.map((item, i) => <Concurso key={i} items={item} />)
        }
    }

    render() {
        return (
            <>
                <div id="pesquisa">
                    <input id="input" type="text" onKeyDown={ (e) => {if(e.key == 'Enter') this.pesquisa()}} />
                    <div id="search" onClick={() => this.pesquisa()}>
                        <SearchIcon id=" icon" />
                    </div>
                </div> 
                {this.load()}
            </>
        )
    }
}

export default LoadConcursos
