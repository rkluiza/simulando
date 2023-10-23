import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import style from '../styles/inicio.module.css'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

export default function inicio() {
  return (
    <>
      <div className="container">
        <Row className="mt-5"> 
          <div className="col">     
      <Image src="/logo-simulando.png" width={761} height={161} />
          </div> 
        </Row>
        <div className="mt-2">
          <div className={style.subtituloCol}>
            <h2 className={style.subtitulo}>O apoio que seus estudos precisava!</h2>
          </div>
        </div>
        <div className={`${style.paragrafo} row`}>
              <p>O Simulando é um site que pretende facilitar e democratizar o acesso a simulados para o ingresso no Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense (IFSUL). Disponibilizando caminhos para conteúdos confiáveis e um retorno sobre o desempenho do aluno conforme as quatro matérias exigidas no exame: Língua Portuguesa, Matemática, Geografia e História.</p>
        </div>
      </div>
      <Row>
        <Col></Col>
        <Col className={style.colBotao}>
          <Button className={`${style.botao} float-right`} href='/'>Iniciar Quiz!</Button>
          </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>

      </Row>
    </>
  )
}