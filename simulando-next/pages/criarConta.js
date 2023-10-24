import CriarcontaForm from '../components/criarconta-form.js';
import LogoSimulando from '../components/logo-simulando.js';
import OffcanvasExample from '../components/cabecalho.js';
import Head from 'next/head';

export default function criarConta() {
    return ( 
        <>
            <Head>
                <title>Simulando!</title>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            </Head>
            <div>
            <OffcanvasExample>
            </OffcanvasExample>
            </div>

            
            <div className='container'>
                <div className='col-6'>
                    
                </div>

                    <div className='row'>
                        <div className='col-6'>
                            <CriarcontaForm>
                            </CriarcontaForm>
                    </div>
                </div>
            </div>
        </>
    )
};
