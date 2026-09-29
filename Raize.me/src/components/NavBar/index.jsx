import { FaStore,FaGift, FaHome, FaRegUserCircle } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
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
          <FaGift size={40} />
        </button>

        <button className="active">
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