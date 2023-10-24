import BasicExample from '../components/login-form'
import OffcanvasExample from '../components/cabecalho'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

export default function Login() {
    return ( 
        <>
        <Head>
            <title>Simulando!</title>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
        </Head>
        <div>
        <OffcanvasExample></OffcanvasExample>
        </div>

        <Container>

            <Row>
                <Col className='col-6'>
                    <BasicExample></BasicExample>
                </Col>
            </Row>
        </Container>
        </>
    )
}