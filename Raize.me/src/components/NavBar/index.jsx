import { FaStore, FaHome, FaRegUserCircle } from "react-icons/fa";
import { FaBuildingColumns, FaRankingStar } from "react-icons/fa6";
import './index.css';
export default function NavBar() {
    return(
      <> 
      <div>
      <nav className="bottom-nav">

        <button>
          <FaStore size={40} />
        </button>

        <button>
          <FaRankingStar size={40}  onClick={() => window.location.href = "/ranking"} />
        </button>

        <button className="active" 
        onClick={() => window.location.href = "/home"} >
          
          <FaHome size={40} />
        </button>

        <button>
          <FaBuildingColumns size={40} />
        </button>

        <button>
          <FaRegUserCircle size={40} />
        </button>

      </nav>
     </div>
     
     
    </>
    )
}