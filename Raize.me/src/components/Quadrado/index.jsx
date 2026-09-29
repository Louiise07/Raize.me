import { VscCheck } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import './index.css';
export default function Quadrado({id, blocked}) {
    const bgColorMision = blocked ? 'green' : 'brown';
    const icone = blocked ? 'check' : 'close';
    return (
        <>
            <div className="mision" style={{ backgroundColor: bgColorMision}}>
                
                {icone === "close" && <VscChromeClose className="icon" />}
                {icone === "check" && <VscCheck  className= "icon"/> }
                
            </div>
        </>

    )
}