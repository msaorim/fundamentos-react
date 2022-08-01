/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import alunos from '../../data/alunos';

export default props => {

    const lista = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} => {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}