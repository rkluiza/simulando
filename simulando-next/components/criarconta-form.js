import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

export default function CriarcontaForm() {

  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNome">
        <Form.Control type="text" placeholder="Nome" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSobrenome">
        <Form.Control type="text" placeholder="Sobrenome" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Criar Conta
      </Button>
    </Form>

    <p>Já tem uma conta? <Link href="/login">Entrar</Link></p>
    </>
  );
}
