import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddDado({ onAddDado }) {
  const [showAddModal, setAddModal] = useState(false);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  //add novo dado
  const novoDado = () => {
    let novodado = {
      nome: nome,
      idade: idade,
      email: email,
      cpf: cpf,
    };
    onAddDado(novodado);
  };
  return (
    <>
      <Modal id="modal-confirm" show={showAddModal} centered>
        <Modal.Header style={{ backgroundColor: "#212529", color: "white" }}>
          Editar dado
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#212529" }}>
          <Form.Group>
            <Form.Control
              className="editdadomodal"
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="editdadomodal"
              type="number"
              placeholder="Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="editdadomodal"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="editdadomodal"
              type="text"
              placeholder="Cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#212529", color: "white" }}>
          <Button
            onClick={() => {
              novoDado();
              setAddModal(false);
            }}
            variant="primary"
          >
            Adicionar Cadastro
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setAddModal(false);
            }}
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={() => setAddModal(true)}>Cadastrar</Button>
    </>
  );
}

export default AddDado;
