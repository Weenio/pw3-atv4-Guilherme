import styles from './EditCad.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Input from '../components/form/Input';
import Select from '../components/form/Select';

export default function EditarLivro(){

    const {id} = useParams()
    console.log(id)

    const navigate = useNavigate();

    const [sala, setSala] = useState([]);
    const [aluno, setAluno] = useState([]);

    useEffect(() => {
        fetch(
            `http://localhost:5000/alunos/${id}`,
            {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json'
                },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setSala(data)
            console.log(data)
        })
        .catch((err) => {console.log(err)})

        fetch(
            'http://localhost:5000/salas',
            {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setSala(data)
            console.log(data)
        })
        .catch((err) => {console.log(err)})
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

    function editarAluno(aluno){

        fetch(
            `http://localhost:5000/books/${aluno.id}`,
            {
                method: 'PATCH',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(aluno)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setAluno(data)
            navigate('/Alunos', {state: 'Cadastro alterado com sucesso.'})
        })
        .catch((err) => {console.log(err)})
    }

    function submit(e){
        e.preventDefault();
        editarAluno(aluno)
    }

    return(
        <section className={styles.alunoCad_container}>
            <h1>Cadastro de Alunos.</h1>

        <form onSubmit={submit}>
            <p>
                <Input
                    type="text"
                    text="Nome do Aluno"
                    name="nomeAluno"
                    placeholder="Digite aqui o nome do aluno"
                    value={aluno.nomeAluno}
                    handlerOnChange={handlerChangeAluno}
                />
            </p>

            <p>
                <Select 
                    name="cod_Aluno"
                    text="Selecione a turma"
                    options={sala}
                    handlerOnChange={handlerChangeSala}
                />
            </p>

        </form>
        </section>
    )
}