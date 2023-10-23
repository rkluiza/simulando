import JustifiedExample from '../components/Recomendacoes-guia.js'
import styles from '../styles/recomendacoes.module.css'
import OffcanvasExample from '../components/cabecalho.js'
import { Container } from 'react-bootstrap'

export default function Recomendacoes(){
    return(
        <>
        <Container></Container>
        <div>
            <OffcanvasExample></OffcanvasExample>
        </div>

            <div className="row">               
                <div className="col-md-12">
                    <JustifiedExample></JustifiedExample>
                </div>
            </div>
        </>
    )
}