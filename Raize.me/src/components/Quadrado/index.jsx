
import { VscCheck } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import "./index.css";

export default function Quadrado({ id, blocked, onClick }) {

    const bgColorMision = blocked ? "green" : "brown";
    const icon = blocked ? "check" : "close";

    return (
        <div
            className="mision"
            style={{ backgroundColor: bgColorMision }}
            onClick={onClick}
        >
            {icon === "close" && (
                <VscChromeClose className="icon" />
            )}

            {icon === "check" && (
                <VscCheck className="icon" />
            )}
        </div>
    );
}
