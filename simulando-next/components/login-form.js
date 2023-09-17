import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Link from 'next/link'

function BasicExample() {
  return (
    <>

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
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>

    <Link href="/">Esqueci minha senha</Link>

    <p>Não tem uma conta?<Link href="/"> Cadastre-se</Link></p>
    </>
  );
}

export default BasicExample;