import { Container, Row, Col, Nav } from "react-bootstrap";
import style from '../styles/quiz.module.css';


export default function Pergunta_quiz(){
    return(
        <>
        {/* <Container className="container">
            <Row className="row">
                <Col>
                    <div className="a">
                    <Nav className={`${style.navlink} mb-3`} variant="tabs" defaultActiveKey="/home" id="justify-tab-example"
                        justify >
                            <Nav.Item>
                                <Nav.Link eventKey="enunciado">Gráficos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="alternativas">Tabelas</Nav.Link>    
                            </Nav.Item>
                    </Nav>
                    </div>
                </Col>
            </Row>
        </Container> */}
        <Container className={`${style.container}`}>
            <Row className={style.row}>
                <Col>
           <h3 className={style.pergunta}>Questão:</h3>
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

                <button type="submit" className="btn btn-primary">Enviar Resposta</button>
            </form>
            </Col>
            </Row>
    </Container>
        </>
    )
}