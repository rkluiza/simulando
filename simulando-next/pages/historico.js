import GuiaHistorico from "../components/historico-guia";
import styles from '../styles/recomendacoes.module.css'
import OffcanvasExample from '../components/cabecalho.js';

export default function Historico(){
    return(
    <>
    <OffcanvasExample></OffcanvasExample>
    <div className="container">
        <div class='row'>
            <div className='col'>
                <h1 className={styles.titulorecomendacoes}>Histórico</h1>
            </div>
        </div>
    
        <div className="row">
            <div className="col">
                <GuiaHistorico></GuiaHistorico>
            </div>
        </div>
    </div>
    </>
    )
}