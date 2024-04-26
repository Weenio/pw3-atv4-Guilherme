import styles from './CardAluno.module.css';

export default function CardAluno({id, aluno, sigla, codTurma}){

    return(
        <div className={styles.alunoItem}>
            <ul>
                <li>{aluno}</li>
                <li>Classe: {sigla}</li>
                <li>Cód. Turma: {codTurma}</li>
            </ul>
        </div>
    )
}