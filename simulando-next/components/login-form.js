import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Link from 'next/link'
import style from '../styles/Inicio.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import PasswordRecovery from './Esqueci-senha';
import Image from 'next/image';

function BasicExample() {
  return (
    <>
    <Container>
    <Row>
                <Col className='col-6'>
                    <Image src='/logo-simulando.png' width={480.5} height={85.5}/>
                </Col>
            </Row>
        <Col></Col>
        <Col>
    <Form method="POST" action={url_for('login')}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control type="email" placeholder="Email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" minlength="8" placeholder="Senha" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Me mantenha conectado" />
      </Form.Group>
      <Button className={`${style.botao} float-right`} variant="primary" type="submit" value={login}>
        Entrar
      </Button>
    </Form>
    </Col>
    <Col></Col>


    <PasswordRecovery></PasswordRecovery>
    <p>Não tem uma conta?<Link href="/criarConta"> Cadastre-se</Link></p>
    </Container>
    </>
  );
}

export default BasicExample;
