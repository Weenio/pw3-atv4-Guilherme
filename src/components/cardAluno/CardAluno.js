import { Link } from 'react-router-dom';
import styles from './CardAluno.module.css';

export default function CardAluno({id, aluno, sigla, codTurma, handlerRemove}){

    const remove = (e) => {
        e.preventDefault();
        handlerRemove(id);
    }

    return(
        <div className={styles.alunoItem}>
            <ul>
                <li>{aluno}</li>
                <li>Classe: {sigla}</li>
                <li>Cód. Turma: {codTurma}</li>
                    
                <div className={styles.aluno_button_actions}>
                    <Link to={`/editarCad/${id}`}>
                        Editar
                    </Link>
                    <button onClick={remove}>
                        Excluir
                    </button>
            </div>
            </ul>
        </div>
    )
}