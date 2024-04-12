import { useEffect, useState } from "react";

import Input from '../components/form/Input.js';
import Select from '../components/form/Select.js';

import styles from './NovoAluno.module.css';

export default function NovoAluno(){

    const [sala, setSala] = useState([]);
    const [aluno, setAluno] = useState([]);

    useEffect(() => {

        fetch(
            'http://localhost:5000/salas',
            {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
        }).then(
            (resp) => resp.json()
        ).then(
            (data) => {
                setSala(data)
                console.log(data)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }, [])

    function handlerChangeAluno(e){

        setAluno({... aluno, [e.target.name] : [e.target.value]})
    }

    function handlerChangeSala(e){

        setAluno({ ... aluno, sala : {
            id: e.target.name,
            sala: e.target.options[e.target.selectedIndex].text
        }});
    }

    function createAluno(aluno){

        fetch(
            'http://localhost:5000/alunos',
            {
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(aluno)
        }).then(
            (resp) => resp.json()
        ).then(
            (data) => {
                console.log(data)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }

    function submit(e){
        e.preventDefault();
        createAluno(aluno);
    }

    return(
        <section className={styles.alunoCad_container}>
            <h1>Cadastro de Alunos.</h1>

        <form onSubmit={submit}>
            <p>
                <Input
                    type="text"
                    text="Nome do Aluno"
                    name="Nome do Aluno"
                    placeholder="Digite aqui o nome do aluno"
                    handlerOnChange={handlerChangeAluno}
                />
            </p>

            <p>
                <Select 
                    name="cod_turma"
                    text="Selecione a turma"
                    options={sala}
                    handlerOnChange={handlerChangeSala}
                />
            </p>

            <p>
                <Input
                    type="submit"
                    value="Cadastrar"
                />
            </p>

        </form>
        </section>
    )
}