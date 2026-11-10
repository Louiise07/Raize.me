
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import "./index.css";

export default function Mission() {

    const navigate = useNavigate();

    function voltar() {
        navigate(-1);
    }

    function iniciarMissao() {
        navigate("/mapa-missao");
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
                        src="/images/fazer-missao.png"
                        alt="Pessoa apresentando uma missão"
                    />

                </div>


                {/* TÍTULO DA MISSÃO */}
                <h2>
                    PLANTE UMA ÁRVORE
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
