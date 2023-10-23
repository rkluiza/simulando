import Image from 'next/image'
//import Button from 'node_modules/react-bootstrap/esm/Button'

export default function inicio() {
  return (
    <>
      <Image src="/logo-simulando.png" width={561} height={111} />
      <h2>O apoio que seus estudos precisava!</h2>
      <p>O Simulando é um site que pretende facilitar e democratizar o acesso a simulados para o ingresso no Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense (IFSUL). Disponibilizando caminhos para conteúdos confiáveis e um retorno sobre o desempenho do aluno conforme as quatro matérias exigidas no exame: Língua Portuguesa, Matemática, Geografia e História.</p>

      {/* <Button href='/criarConta'>Iniciar Quiz!</Button> */}
    </>
  )
}