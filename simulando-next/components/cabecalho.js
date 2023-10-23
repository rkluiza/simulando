import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/cabecalho.module.css';
import { useRouter } from 'next/router';
import { Image } from 'react-bootstrap';




function OffcanvasExample() {
    const router = useRouter();
    
    
    const handleLoginClick = () => {
    router.push('/login.js'); {/*deu errado aqui n entendi o pq */}
  };
    const handleHomeClick = () => {
      router.push('/'); 
    }

  return (
    <>
      {[false].map((expand) => (
        <Navbar  key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container  className={styles.menu} fluid>
          <Navbar.Toggle className={styles.botaoMenu} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#">
                <Image src='/logo-simulando.png' onClick={handleHomeClick} width={280.5} height={55.5}/> {/* nao consegui colocar o href */}
                <Image className={styles.iconPessoa} onClick={handleLoginClick} src='/icon-pessoa.png' width={40.5} height={35.5}></Image>
            </Navbar.Brand>
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src='/logo-simulando.png' width={280.5} height={55.5} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/historico">Histórico</Nav.Link>
                  <Nav.Link href="/recomendacoes">Recomendações</Nav.Link>
                  <Nav.Link href="/">Quiz</Nav.Link>
                  <Nav.Link href="/">Sobre Nós</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;