import GuiaHistorico from "../components/historico-guia";
import styles from '../styles/recomendacoes.module.css'
import OffcanvasExample from '../components/cabecalho.js';
import { Container } from "react-bootstrap";
import style from '../styles/historico.module.css';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Historico(){
    return(
    <>
    <OffcanvasExample></OffcanvasExample>
    <Container className={style.container}>
        <Row className={style.row}>
            <Col>
                <h1 className={styles.titulorecomendacoes}>Histórico</h1>
            </Col>
        </Row>
    
        <Row className={style.row}>
            <Col>
                <GuiaHistorico></GuiaHistorico>
            </Col>
        </Row>
    </Container>
    </>
    )
}