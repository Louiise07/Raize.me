
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

import "./index.css";

export default function TirarFoto() {
    const navigate = useNavigate();

    return (
        <div className="foto-page">

            <header className="foto-header">
                <button
                    className="foto-voltar"
                    onClick={() => navigate(-1)}
                >
                    <MdArrowBack />
                </button>

                <h1>Tirar foto</h1>
            </header>

            <main className="foto-conteudo">

                <div className="camera-reservada">
                    <p>Espaço reservado para a câmera</p>
                </div>

                <button
                    className="btn-foto"
                    onClick={() => navigate("/verificar-foto")}
                >
                    CONTINUAR
                </button>

            </main>

        </div>
    );
}
