
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import "./index.css";

export default function VerificarFoto() {
    const navigate = useNavigate();

    return (
        <div className="verificar-page">

            <header className="verificar-header">
                <button
                    className="verificar-voltar"
                    onClick={() => navigate(-1)}
                >
                    <MdArrowBack />
                </button>

                <h1>IA Scanner</h1>
            </header>

            <main className="verificar-conteudo">

                <div className="foto-preview">
                    <p>Prévia da foto registrada</p>
                </div>

                <div className="foto-status">
                    <FaCheckCircle />
                    <span>Foto enviada para verificação</span>
                </div>

            </main>

        </div>
    );
}
