import Header from '../../components/Header/index.jsx'
import NavBar from '../../components/NavBar/index.jsx'
import Quadrado from '../../components/Quadrado/index.jsx'
import { useNavigate } from "react-router-dom";

export default function Home (){
    const misions = [{'id': 0, 'blocked': true}, {'id': 1, 'blocked': true}, {'id': 2, 'blocked': false}, {'id': 3, 'blocked': false}, {'id': 4, 'blocked': false}, {'id': 5, 'blocked': false}, {'id': 6, 'blocked': false}, {'id': 7, 'blocked': false}, {'id': 8, 'blocked': false} ]
    const navigate = useNavigate();
    return(
        <>
        <Header/>
        <main>
            <div id="categorias"></div>
            <div id="itens">
                     {missions.map((mission, index) => (
    <Quadrado
        key={mission.id}
        id={mission.id}
        blocked={mission.blocked}
        onClick={
            index === 0
                ? () => navigate("/mission")
                : undefined
        }
    />
))}
            </div>
        </main>
        <NavBar/>
        
        </>
    )
}