import { Row } from 'react-bootstrap';
import style from '../styles/sobreNositens.module.css';

export default function SobreNositens() {
    return(
        <>
            <div className={style.container}>
                <Row className={style.row}> 
                    <div className="col">
                        <h1>Sobre Nós</h1>
                        <h4>Julia Dapper e Luiza Klein são alunas da Instituição Federal de Ensino Sul-Rio-Grandense no curso técnico integrado de Informática. O site foi desenvolvido para a disciplina de Projetos II do 4º ano do curso.</h4>
                    </div>
                    <div className="col">
                        <h2>Celular</h2>
                        <p>(51) 99999-9999</p>
                        <p>(51) 99999-9999</p>

                        <h2>Email</h2>
                        <p>juliadapper.sg060@academico.ifsul.edu.br</p>
                        <p>luizaklein.sg007@academico.ifsul.edu.br</p>

                        <h2>Linkedin</h2>
                        <p>julia__dapper</p>
                        <p>rkluiza</p>
                    </div>
                </Row>
            </div>
        </>
    )
}