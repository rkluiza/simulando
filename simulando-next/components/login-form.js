import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Link from 'next/link'
import style from '../styles/Inicio.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import PasswordRecovery from './Esqueci-senha';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"
import OffcanvasExample from './cabecalho';



export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <OffcanvasExample></OffcanvasExample>
        Logado como {session.user.name} <br />
        <button onClick={() => signOut()}>Deslogar</button>
      </>
    )
  }
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
    <Form method="POST">     <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control type="email" placeholder="Email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" minlength="8" placeholder="Senha" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Me mantenha conectado" />
      </Form.Group>
      <Button className={`${style.botao} float-right`} variant="primary" type="submit">
        Entrar
      </Button>

      <br></br>
      <Row>
        <Col>
          <PasswordRecovery></PasswordRecovery>
        </Col>
      </Row>

      <Row>
      <Col>
      <Link href=''>
      <p onClick={() => signIn()}>
        Entrar com Google
     
      </p>
      </Link>
      </Col>
      </Row>
   
    </Form>
    </Col>
    <Col></Col>

    </Container>
    </>
  )
}


