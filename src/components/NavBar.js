import { Outlet, Link } from "react-router-dom";
import styles from './NavBar.module.css';
import Container from "./Container";

export default function NavBar(){
    return(
        <>

            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/Alunos'>Alunos</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/novoAluno'>Cadastrar Aluno</Link>
                    </li>
                </ul>
            </Container>

            <Outlet></Outlet>
        </>
    )
}