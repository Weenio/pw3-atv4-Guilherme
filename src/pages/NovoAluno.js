import { useEffect, useState } from "react";

import Input from '../components/form/Input.js';
import Select from '../components/form/Select.js';

import styles from './NovoAluno.module.css';

export default function NovoAluno(){

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {

        fetch(
            'http://localhost:5000/categories',
            {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
        }).then(
            (resp) => resp.json()
        ).then(
            (data) => {
                setCategorias(data)
                console.log(data)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }, [])

    return(
        <section className={styles.alunoCad_container}>
            <h1>Cadastro de Alunos.</h1>

            <p>
                <Input
                    type="text"
                    text="Nome do Aluno"
                    name="Nome do Aluno"
                    placeholder="Digite aqui o nome do aluno"
                    value=""
                />
            </p>

            <p>
                <Select 
                    name="catecoriaID"
                    text="Selecione a turma"
                    options={categorias}
                />
            </p>
        </section>
    )
}