import { Container, Row, Col, Nav } from "react-bootstrap";
import style from '../styles/quiz.module.css';


export default function Pergunta_quiz(){
    return(
        <>

        <Container className={`${style.container}`}>
            <Row className={style.row}>
                <Col>
                    <h3 className={style.pergunta}>Questão X/40</h3>
                        <p className={style.p}>Qual é a capital do Brasil?</p>
                </Col>
            </Row>
            <Row className={style.row}>
                <Col>
            <form>
                <div className="form-check">
                <input type="radio" className="form-check-input" id="alternativaA" name="alternativa" />
                <label className="form-check-label" htmlFor="alternativaA">A) Brasília</label>
                </div>
                <div className="form-check">
                <input type="radio" className="form-check-input" id="alternativaB" name="alternativa" />
                <label className="form-check-label" htmlFor="alternativaB">B) São Paulo</label>
                </div>
                <div className="form-check">
                <input type="radio" className="form-check-input" id="alternativaC" name="alternativa" />
                <label className="form-check-label" htmlFor="alternativaC">C) Rio de Janeiro</label>
                </div>
                <div className="form-check">
                <input type="radio" className="form-check-input" id="alternativaD" name="alternativa" />
                <label className="form-check-label" htmlFor="alternativaD">D) Belo Horizonte</label>
                </div>

                <Col className="mb-3"></Col>
                <Col className="mb-6">
                <button type="submit" className={style.botao}>Enviar Resposta</button>
                </Col>
                <Col className="mb-3"></Col>
            </form>
            </Col>
            </Row>
    </Container>
        </>
    )
}