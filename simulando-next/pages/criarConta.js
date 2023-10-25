import CriarcontaForm from '../components/criarconta-form.js';
import LogoSimulando from '../components/logo-simulando.js';
import OffcanvasExample from '../components/cabecalho.js';

export default function criarConta() {
    return ( 
        <>
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
