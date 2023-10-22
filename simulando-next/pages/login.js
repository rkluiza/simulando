import BasicExample from '../components/login-form'
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
                    <Image src='/logo-simulando.png' width={280.5} height={55.5} />
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