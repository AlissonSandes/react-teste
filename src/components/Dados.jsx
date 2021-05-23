import React from "react";
import "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dado from "./Dado";
import "bootstrap/dist/css/bootstrap.min.css";

function Dados({ dados, onDelete, onEditDado }) {
  return (
    <Table variant="dark">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>E-mail</th>
          <th>Cpf</th>
          <th style={{ textAlign: "center" }}>Remover</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((dado) => (
          <Dado
            key={dado.id}
            dado={dado}
            onDelete={onDelete}
            onEditDado={onEditDado}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default Dados;
