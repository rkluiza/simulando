import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../styles/historico.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../styles/recomendacoes.module.css';


function JustifiedExample() {
  return (
    <Container className={styles.container}>
            <Row>
                <Col className='md-6'>
                    <h1 className={style.titulorecomendacoes}>Recomendações</h1>
                </Col>
            </Row>

    <Tabs className={`${styles.navlink} mb-3`}
      defaultActiveKey="profile"
      id="justify-tab-example"
      justify
    >
      <Tab eventKey="home" title="Português">
        Tab content for Home
      </Tab>
      <Tab  eventKey="profile" title="Matemática">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="História">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Geografia">
        Tab content for Contact
      </Tab>
    </Tabs>
    </Container>
  );
}

export default JustifiedExample;