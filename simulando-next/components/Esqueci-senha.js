import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function PasswordRecovery() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);

  const handleShow = () => {
    setShowModal(true);
    setStep(1);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    if (step === 1) {
      // Validar o email, se necessário
      setStep(2);
    } else {
      // Validar o código de recuperação, se necessário
      // Você pode adicionar a lógica de validação aqui
      // Se o código estiver correto, você pode prosseguir com a recuperação da senha
      handleClose();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Esqueci minha senha
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar Senha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {step === 1 ? (
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Informe seu email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Form>
          ) : (
            <Form>
              <Form.Group controlId="formBasicCode">
                <Form.Label>Código de Recuperação</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Código de recuperação"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleNext}>
            {step === 1 ? "Próximo" : "Enviar Código"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PasswordRecovery;

