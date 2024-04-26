import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Alunos.module.css';

import Container from '../components/Container';
import CardAluno from '../components/cardAluno/CardAluno';
import Message from '../components/message/Message';

export default function Alunos(){

    const[alunos, setAlunos] = useState([]);

    useEffect(() => {
        fetch(
            'http://localhost:5000/alunos',
            {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json'
                },
        })
        .then((resp) => resp.json())
        .then((data) => {setAlunos(data)})
        .catch((err) => {console.log(err)})
    }, [])


    const location = useLocation();
    let message = '';

    if(location.state){
        message = location.state;
    }

    console.log('LOCATION STATE : ' + location.state);

    return(
        <section>
            <h1>Lista de alunos registrados no banco de dados</h1>
            {
                message && (
                    <Message
                        msg="Olá? Pode me ver?"
                        type="success"
                    />
                )
            }

            {
                alunos.map((alunos) => (
                    <CardAluno
                        id={alunos.id}
                        aluno={alunos.nomeAluno}
                        sigla={alunos.sala.sala}
                        codTurma={alunos.sala.id}
                    />
                ))
            }
        </section>
    )
}