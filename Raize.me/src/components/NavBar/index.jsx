import { FaStore } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
export default function NavBar() {
    return
    <> 
     <div>
      <nav className="bottom-nav">

        <button>
          <FaStore size={22} />
        </button>

        <button>
          <FaGift size={22} />
        </button>

        <button className="active">
          <FaHome size={25} />
        </button>

        <button>
          <aBuildingColumns size={22} />
        </button>

        <button>
          <FaRegUserCircle size={23} />
        </button>

      </nav>
     </div>
     

    </>
}