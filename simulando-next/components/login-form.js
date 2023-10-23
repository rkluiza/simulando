import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Link from 'next/link'
import style from '../styles/Inicio.module.css'
import { Container, Row, Col } from 'react-bootstrap';

function BasicExample() {
  return (
    <>
    <Container>

        <Col></Col>
        <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Me mantenha conectado" />
      </Form.Group>
      <Button className={`${style.botao} float-right`} variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
    </Col>
    <Col></Col>


    <Link href="/">Esqueci minha senha</Link>

    <p>Não tem uma conta?<Link href="/criarConta"> Cadastre-se</Link></p>
    </Container>
    </>
  );
}

export default BasicExample;