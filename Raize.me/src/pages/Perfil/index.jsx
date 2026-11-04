
import { useState } from "react";
import { FiUser, FiBell, FiAward } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";
import NavBar from "../../components/NavBar/index.jsx";
import mockDb from "../../service/db.json";
import "./index.css";

const defaultUser = mockDb.user[0];
const defaultPerfil = mockDb.Perfil[0];

export default function Perfil() {

    
    const [user, setUser] = useState(defaultUser);
    const [perfil, setPerfil] = useState(defaultPerfil);
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (event) => {

        const { name, value } = event.target;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));

        setSubmitted(false);

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        setSubmitted(true);

    };


    const stats = [
        { label: "XP", value: user.xp },
        { label: "Missões realizadas", value: perfil.missoesRealizadas },
        { label: "Nível", value: perfil.nivel },
        { label: "Conquistas", value: perfil.conquistas },
    ];

    
    const fields = [
        {
            label: "Nome",
            name: "nome",
            type: "text",
            value: user.nome,
        },
        {
            label: "E-mail",
            name: "email",
            type: "email",
            value: user.email,
        },
        {
            label: "Senha",
            name: "senha",
            type: "password",
            value: user.senha,
        },
    ];

    return (

        <div className="perfil-page">

            <main className="perfil-content">

                {/* TOPO DO PERFIL */}
                <section className="perfil-topo">

                    <div className="perfil-avatar">
                        <FiUser />
                    </div>

                    <button className="perfil-notificacao">
                        <FiBell />
                    </button>

                    <h2>{user.nome}</h2>

                </section>


                {/* ESTATÍSTICAS */}
                <section className="perfil-estatisticas">

                    {stats.map((item) => (

                        <div key={item.label} className="estatistica">

                            <strong>{item.value}</strong>

                            <span>{item.label}</span>

                        </div>

                    ))}

                </section>


                {/* CONQUISTAS */}
                <section className="perfil-conquistas">

                    <div className="conquistas-titulo">

                        <h3>Conquistas</h3>

                        <button>Ver todas</button>

                    </div>

                    <div className="conquistas-lista">

                        <div className="conquista">
                            <FaTrophy />
                        </div>

                        <div className="conquista">
                            <FiAward />
                        </div>

                        <div className="conquista">
                            <FaTrophy />
                        </div>

                    </div>

                </section>


                {/* FORMULÁRIO */}
                <form className="perfil-form" onSubmit={handleSubmit}>

                    {fields.map(({ label, name, type, value }) => (

                        <div key={name}>

                            <label htmlFor={name}>
                                {label}
                            </label>

                            <input
                                id={name}
                                name={name}
                                type={type}
                                value={value}
                                onChange={handleChange}
                            />

                        </div>

                    ))}

                    <button type="submit" className="btn-salvar">

                        {submitted ? "Sair" : "Salvar"}

                    </button>

                    <button
                        type="button"
                        className="btn-sair"
                        onClick={() => {
                            setUser(defaultUser);
                            setSubmitted(false);
                        }}
                    >
                        Sair
                    </button>

                </form>

            </main>

            <NavBar />

        </div>

    );

}
