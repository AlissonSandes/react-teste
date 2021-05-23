import React, { useState } from "react";
import { FaTimes, FaUserEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Dado({ dado, onDelete, onEditDado }) {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setEditModal] = useState(false);
  const [nome, setNome] = useState(dado.nome);
  const [idade, setIdade] = useState(dado.idade);
  const [email, setEmail] = useState(dado.email);
  const [cpf, setCpf] = useState(dado.cpf);
  //edit dado
  const editDado = () => {
    let dadolterado = {
      id: dado.id,
      nome: nome,
      idade: idade,
      email: email,
      cpf: cpf,
    };

    onEditDado(dadolterado);
  };
  return (
    <tr>
      <Modal id="modal-confirm-deletion" show={showModal} centered>
        <Modal.Header style={{ backgroundColor: "#212529", color: "white" }}>
          Tem certeza que deseja excluir este item? Essa ação é irreversível.
        </Modal.Header>
        <Modal.Footer style={{ backgroundColor: "#212529", color: "white" }}>
          <Button
            onClick={() => {
              onDelete(dado.id);
              setShowModal(false);
            }}
            variant="danger"
          >
            Excluir
          </Button>
          <Button
            className="btn red"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
      <td key={dado.id}>{dado.nome}</td>
      <td>{dado.idade}</td>
      <td>{dado.email}</td>
      <td>{dado.cpf}</td>
      <td style={{ textAlign: "center" }}>
        <FaUserEdit
          style={{ color: "#fd700b", cursor: "pointer", marginRight: "10px" }}
          onClick={() => setEditModal(true)}
        />
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => setShowModal(true)}
        />
      </td>
      <Modal id="modal-confirm" show={showEditModal} centered>
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
              editDado();
              setEditModal(false);
            }}
            variant="primary"
          >
            Salvar Alterações
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setEditModal(false);
            }}
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
}

export default Dado;
