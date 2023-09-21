import BasicExample from '../components/login-form'
import LogoSimulando from '../components/logo-simulando'
import OffcanvasExample from '../components/cabecalho'

export default function Login() {
    return ( 
        <>
        <div>
        <OffcanvasExample></OffcanvasExample>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <LogoSimulando></LogoSimulando>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <BasicExample></BasicExample>
                </div>
            </div>
        </div>
        </>
    )
}