import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import "./index.css";

export default function Mission() {

    const navigate = useNavigate();

    function voltar() {
        navigate(-1);
    }

    function iniciarMissao() {
        navigate("/mapamissao");
    }

    return (
        <div className="fazer-missao-page">

            {/* CABEÇALHO */}
            <header className="missao-header">

                <button
                    className="voltar-missao"
                    onClick={voltar}
                >
                    <MdArrowBack />
                </button>

                <h1>Missões</h1>

            </header>


            {/* CONTEÚDO */}
            <main className="missao-conteudo">

                {/* ILUSTRAÇÃO */}
                <div className="missao-ilustracao">

                  <img
    src="https://aparasliberdade.com.br/wp-content/uploads/2024/04/AdobeStock_39031314.webp"
    alt="Latinhas de alumínio para reciclagem"
/>

                </div>


                {/* TÍTULO DA MISSÃO */}
                <h2>
                    RECLICE 5 LATAS DE ALUMÍNIO
                    <br />
                    E REGISTRE
                </h2>


                {/* BOTÃO */}
                <button
                    className="btn-vamos-la"
                    onClick={iniciarMissao}
                >
                    VAMOS LÁ!
                </button>

            </main>

        </div>
    );
}
