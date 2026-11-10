
import { useState } from "react";

import {
    FaTicketAlt,
    FaGift,
    FaMoneyBillWave,
    FaShoppingBag,
    FaTshirt,
    FaBriefcaseMedical,
    FaPumpMedical,
    FaMobileAlt,
    FaShoppingBasket
} from "react-icons/fa";

import NavBar from "../../components/NavBar/index.jsx";

import "./index.css";


export default function Loja() {

    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    const categorias = [
        {
            id: 1,
            nome: "Cupons",
            icone: <FaTicketAlt />,
            disponivel: true
        },
        {
            id: 2,
            nome: "Brindes",
            icone: <FaGift />,
            disponivel: true
        },
        {
            id: 3,
            nome: "Cashback",
            icone: <FaMoneyBillWave />,
            disponivel: true
        },
        {
            id: 4,
            nome: "Acessórios",
            icone: <FaShoppingBag />,
            disponivel: false
        },
        {
            id: 5,
            nome: "Roupas",
            icone: <FaTshirt />,
            disponivel: false
        },
        {
            id: 6,
            nome: "Farmácia",
            icone: <FaBriefcaseMedical />,
            disponivel: false
        },
        {
            id: 7,
            nome: "Cuidados",
            icone: <FaPumpMedical />,
            disponivel: false
        },
        {
            id: 8,
            nome: "Eletrônicos",
            icone: <FaMobileAlt />,
            disponivel: false
        },
        {
            id: 9,
            nome: "Meus itens",
            icone: <FaShoppingBasket />,
            disponivel: false
        }
    ];


    function selecionarCategoria(categoria) {

        if (!categoria.disponivel) {
            return;
        }

        setCategoriaSelecionada(categoria.nome);

    }


    return (
        <div className="loja-page">

            <main className="loja-content">

                {/* CABEÇALHO DA LOJA */}
                <header className="loja-header">

                    <h1>Loja</h1>

                    <div className="loja-saldo">

                        <div className="moeda-raize">
                            R
                        </div>

                        <strong>5000 Raizecoins</strong>

                    </div>

                </header>


                {/* CATEGORIAS */}
                <section className="loja-categorias">

                    <div className="categorias-grid">

                        {categorias.map((categoria) => (

                            <button
                                key={categoria.id}

                                className={`categoria-card
                                    ${categoria.disponivel ? "disponivel" : "indisponivel"}
                                    ${categoriaSelecionada === categoria.nome ? "selecionada" : ""}
                                `}

                                onClick={() => selecionarCategoria(categoria)}
                                disabled={!categoria.disponivel}
                            >

                                <div className="categoria-icone">
                                    {categoria.icone}
                                </div>

                                <span>
                                    {categoria.nome}
                                </span>

                            </button>

                        ))}

                    </div>

                </section>


               
            </main>

            <NavBar />

        </div>
    );
}
