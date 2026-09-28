import Header from '../../components/Header/index.jsx'
import Quadrado from '../../components/Quadrado/index.jsx'

export default function Home (){
    const misions = [{'id': 0, 'blocked': true}, {'id': 1, 'blocked': true}, {'id': 2, 'blocked': false}, {'id': 3, 'blocked': false}, {'id': 4, 'blocked': false}, {'id': 5, 'blocked': false}, {'id': 6, 'blocked': false}, {'id': 7, 'blocked': false}, {'id': 8, 'blocked': false} ]
    
    return(
        <>
        <Header/>
        <main>
            <div id="categorias"></div>
            <div id="itens">
                     {misions.map((mision,index)=>(
                        <Quadrado
                            id={mision.id}
                            blocked={mision.blocked}
                        />
                     ))}
            </div>
        </main>
        
        </>
    )
}