import { useState } from "react";
import "./Login.css";

function Login() {
    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(true);
        console.log(active)
    };
    const handleOff = () => {
        setActive(false);
        console.log(active)
    };

    return (
        <div id="LoginCont">
            <div
                className={` container ${active ? " active" : ""}`}
                id="container"
            >
                <div className="form-container sign-up">
                    <form action="register.php" method="POST">
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
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                        />
                        <input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            required
                        />
                        <button type="submit">Registrar</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form action="login.php" method="POST">
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
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                        />
                        <input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            required
                        />
                        <a href="#">Esqueceu sua senha?</a>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Seja Bem-vindo !</h1>
                            <p>
                                Insira seus dados para utilizar todas
                                as funcionalidades do site
                            </p>
                            <button
                                className="hidden"
                                id="login"
                                onClick={() => handleOff()}
                            >
                                Entrar
                            </button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Olá, Amigo!</h1>
                            <p>
                                Registre-se com seus dados para
                                utilizar todas as funcionalidades do site
                            </p>
                            <button
                                className="hidden"
                                id="register"
                                onClick={() => handleActive()}
                            >
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
