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
            <div>
                <LogoSimulando>
                </LogoSimulando>
            </div>
            <div>
                <CriarcontaForm>
                </CriarcontaForm>
            </div>
        </>
    )
}
