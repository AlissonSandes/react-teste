import React, { useState } from "react";
import "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { Link } from "react-router-dom";

const Login = ({ onLogin, isLogged }) => {
  //component data
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
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
    onLogin({ name, pass });
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
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Mantenha-me Conectado" />
        </Form.Group>
        <Button
          className="btn"
          variant="primary"
          type="submit"
          style={{ width: "300px" }}
        >
          Entrar
        </Button>
        <Link to="/cadastro" className="registrese">
          Não possui cadastro? Cadastre-se!
        </Link>
      </Form>
    </div>
  );
};

export default Login;
