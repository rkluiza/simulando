import BasicExample from '../components/login-form'
import OffcanvasExample from '../components/cabecalho'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'


export default function Login() {
    return ( 
        <>
        <div>
        <OffcanvasExample></OffcanvasExample>
        </div>

        <Container>
            <Row>
                <Col className='col-6'>
                    <Image src='/logo-simulando.png' width={480.5} height={85.5}/>
                </Col>
            </Row>
            <Row>
                <Col className='col-6'>
                    <BasicExample></BasicExample>
                </Col>
            </Row>
        </Container>
        </>
    )
}