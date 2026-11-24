
import { FaStore, FaHome, FaRegUserCircle } from "react-icons/fa";
import { FaBuildingColumns, FaRankingStar } from "react-icons/fa6";
import './index.css';

export default function NavBar() {
    return (
        <nav className="bottom-nav">

            <button onClick={() => window.location.href = "/loja"}>
                <FaStore />
            </button>

            <button onClick={() => window.location.href = "/ranking"}>
                <FaRankingStar />
            </button>

            <button
                className="active"
                onClick={() => window.location.href = "/home"}
            >
                <FaHome />
            </button>

            <button>
                <FaBuildingColumns />
            </button>

            <button onClick={() => window.location.href = "/perfil"}>
                <FaRegUserCircle />
            </button>

        </nav>
    );
}
