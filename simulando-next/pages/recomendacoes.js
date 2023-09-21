import JustifiedExample from '../components/Recomendacoes-guia.js'
import styles from '../styles/recomendacoes.module.css'
import OffcanvasExample from '../components/cabecalho.js'

export default function Recomendacoes(){
    return(
        <>
        <div>
            <OffcanvasExample></OffcanvasExample>
        </div>

        <div className="container">
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className={styles.titulorecomendacoes}>Recomendações</h1>
                </div>
            </div>

            <div className="row">               
                <div className="col-md-12">
                    <JustifiedExample></JustifiedExample>
                </div>
            </div>
        </div>
        </>
    )
}