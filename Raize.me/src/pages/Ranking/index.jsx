import { FaStore, FaHome, FaRegUserCircle } from "react-icons/fa";
import {
    FaBuildingColumns,
    FaRankingStar,
    FaRegCircleUser
} from "react-icons/fa6";

import "./index.css";

export default function Ranking() {

    const ranking = [
        { nome: "Usuário", pontos: 1000 },
        { nome: "Usuário", pontos: 870 },
        { nome: "Usuário", pontos: 300 },
        { nome: "Usuário", pontos: 200 },
        { nome: "Usuário", pontos: 150 },
        { nome: "Usuário", pontos: 90 },
        { nome: "Usuário", pontos: 60 },
        { nome: "Usuário", pontos: 50 },
        { nome: "Usuário", pontos: 30 }
    ];

    return (
        <>
            <main className="ranking">

                {ranking.map((usuario, index) => (

                    <div
                        className={`ranking-item ${
                            index === 4 ? "meu-ranking" : ""
                        }`}
                        key={index}
                    >

                        {/* MEDALHAS */}
                        {index < 3 && (
                            <span className={`medal medal-${index + 1}`}>
                                {index === 0 && "🥇"}
                                {index === 1 && "🥈"}
                                {index === 2 && "🥉"}
                            </span>
                        )}

                        {/* FOTO/ÍCONE DO USUÁRIO */}
                        <FaRegCircleUser className="user-icon" />

                        {/* NOME */}
                        <span className="nome">
                            {usuario.nome}
                        </span>

                        {/* XP */}
                        <strong className="pontos">
                            {usuario.pontos}xp
                        </strong>

                    </div>

                ))}

            </main>


            {/* NAVBAR */}

            <nav className="bottom-nav">

                <button>
                    <FaStore size={32} />
                </button>

                <button
                    onClick={() => window.location.href = "/ranking"}
                >
                    <FaRankingStar size={32} />
                </button>

               <button className="active" 
            onClick={() => window.location.href = "/home"} >
          
          <FaHome size={40} />
        </button>
                
                <button>
                    <FaBuildingColumns size={32} />
                </button>

                <button>
                    <FaRegUserCircle size={32} />
                </button>

            </nav>
        </>
    );
}
