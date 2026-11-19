
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdLocationOn } from "react-icons/md";

import "./index.css";

export default function MapaMissao() {
    const navigate = useNavigate();

    return (
        <div className="mapa-page">

            <header className="mapa-header">
                <button
                    className="mapa-voltar"
                    onClick={() => navigate(-1)}
                >
                    <MdArrowBack />
                </button>

                <h1>Mapa de missões</h1>

                <MdLocationOn className="mapa-localizacao" />
            </header>

            <main className="mapa-conteudo">

                <h2>RECIFE ANTIGO</h2>

                <div className="mapa-reservado">
                    <span>Mapa de missões</span>
                    <p>Espaço reservado para a ilustração do mapa</p>
                </div>

                <button
                    className="btn-registrar"
                    onClick={() => navigate("/tirarfoto")}
                >
                    REGISTRAR
                </button>

            </main>

        </div>
    );
}
