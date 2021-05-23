import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Cadastro({ onCadastrar }) {
  //component data
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [passrep, setPassRep] = useState("");

  //toast notification
  const [showA, setShowA] = useState(false);
  const [toastmsg, toastmsgA] = useState("Mensagem padrão");

  const toggleShowA = () => setShowA(!showA);
  //methods
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || pass === "") {
      toastmsgA("Os campos nome e senha são obrigatórios!");
      toggleShowA();
      return;
    }
    if (pass !== passrep) {
      toastmsgA("As senhas digitadas precisam ser iguais!");
      toggleShowA();
      return;
    }
    onCadastrar({ name, pass });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        width: "50%",
        height: "100vh",
      }}
    >
      {/* {isLogged ? <Redirect to="/" /> : ""} */}
      <Toast
        className="toastnotification"
        show={showA}
        onClose={toggleShowA}
        delay={3000}
        autohide
      >
        <Toast.Body>{toastmsg}</Toast.Body>
      </Toast>

      <Form style={{ width: "300px" }} onSubmit={onSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Senha"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordRep">
          <Form.Control
            type="password"
            placeholder="Repetir senha"
            value={passrep}
            onChange={(e) => setPassRep(e.target.value)}
          />
        </Form.Group>
        <Button
          className="btn"
          variant="primary"
          type="submit"
          style={{ width: "300px" }}
        >
          Cadastrar
        </Button>
        <Link to="/login" className="registrese">
          Já possui cadastro? Fazer login!
        </Link>
      </Form>
    </div>
  );
}

export default Cadastro;
