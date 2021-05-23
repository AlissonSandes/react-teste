import React from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  //dados
  // const [users, setUsers] = useState({ admin: "admin", bianca: "bianca" });
  const [users, setUsers] = useState([
    { id: 1, nome: "admin", password: "admin" },
    { id: 1, nome: "bianca", password: "bianca" },
  ]);
  const [dados, setDados] = useState([
    {
      id: "1",
      nome: "Marcos Paulo",
      idade: "22",
      email: "marcospaulo@gmail.com",
      cpf: "091.652.254-50",
    },
    {
      id: "2",
      nome: "João",
      idade: "18",
      email: "johnwick@gmail.com",
      cpf: "071.653.254-49",
    },
  ]);
  //state da toast notification
  const [showA, setShowA] = useState(false);
  const [toastmsg, toastmsgA] = useState("Mensagem padrão");
  const toggleShowA = () => setShowA(!showA);
  const [notcolor, setNotColor] = useState("red");

  //state da sessão
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //cadastrar novo usuario
  const onCadastrar = ({ name, pass }) => {
    if (name in users) {
      toastmsgA("Não foi possível cadastrar pois esse nome está em uso");
      setNotColor("red");
      toggleShowA();
    }
    let id = uuidv4();
    const newUser = { id: id, nome: name, password: pass };
    console.log(newUser);
    let newusers = users;
    newusers.push(newUser);
    setUsers(newusers);
    toastmsgA(
      "Usuário adicionado com sucesso! Você foi logado e será redirecionado..."
    );
    setNotColor("green");
    toggleShowA();

    setTimeout(() => {
      Cookies.set("isLoggedIn", "true");
      setIsLoggedIn(true);
    }, 3000);
  };
  //login
  const onLogin = ({ name, pass }) => {
    console.log(name);
    let log = users.filter((user) => {
      return user.nome === name && user.password === pass;
    });
    console.log(log);

    if (log.length === 1) {
      console.log("logado");
      setNotColor("green");
      toastmsgA("Logado com sucesso! Redirecionando...");
      toggleShowA();

      setTimeout(() => {
        Cookies.set("isLoggedIn", "true");
        setIsLoggedIn(true);
      }, 3000);
    } else {
      setNotColor("red");
      toastmsgA("Usuário ou senha incorretos.");
      toggleShowA();
    }
  };
  //logout
  const onLogout = () => {
    Cookies.set("isLoggedIn", "false");
    toastmsgA("Deslogando...");
    setNotColor("red");
    toggleShowA();
    setTimeout(() => {
      setIsLoggedIn(false);
    }, 1500);
  };
  //add dado
  const addDado = (novodado) => {
    if (
      novodado.nome === "" ||
      novodado.idade === "" ||
      novodado.cpf === "" ||
      novodado.email === ""
    ) {
      toastmsgA("Não são permitidos campos vazios!");
      setNotColor("red");
      toggleShowA();
    }
    try {
      let id = uuidv4();
      novodado.id = id;
      setDados([...dados, novodado]);
    } catch (e) {
      toastmsgA("Erro ao realizar cadastro!");
      setNotColor("red");
      toggleShowA();
    }

    toastmsgA("Cadastro realizado com sucesso!");
    setNotColor("green");
    toggleShowA();
  };
  //remover dado
  const deleteDado = (id) => {
    setDados(dados.filter((dado) => dado.id !== id));
    toastmsgA("Dado removido com sucesso!");
    setNotColor("green");
    toggleShowA();
  };
  //editar dado
  const editDado = (dado) => {
    console.log(dado);
    if (
      dado.nome === "" ||
      dado.idade === "" ||
      dado.cpf === "" ||
      dado.email === ""
    ) {
      toastmsgA("Não são permitidos campos vazios!");
      setNotColor("red");
      toggleShowA();
    } else {
      setDados(
        dados.map((cdado) =>
          cdado.id === dado.id
            ? {
                ...cdado,
                nome: dado.nome,
                idade: dado.idade,
                email: dado.email,
                cpf: dado.cpf,
              }
            : cdado
        )
      );
      toastmsgA("Dado alterado com sucesso!");
      setNotColor("green");
      toggleShowA();
    }
  };
  //verifica os cookies para checar se usuário está logado
  if (Cookies.get("isLoggedIn") === "true" && isLoggedIn === false) {
    setIsLoggedIn(true);
  }

  return (
    <>
      <Toast
        className={`toastnotification ${notcolor}`}
        show={showA}
        onClose={toggleShowA}
        delay={3000}
        autohide
      >
        <Toast.Body>{toastmsg}</Toast.Body>
      </Toast>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? (
              <Home
                dados={dados}
                onLogout={onLogout}
                onDelete={deleteDado}
                onEditDado={editDado}
                onAddDado={addDado}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/login">
            {isLoggedIn ? <Redirect to="/" /> : <Login onLogin={onLogin} />}
          </Route>

          <Route path="/cadastro">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Cadastro onCadastrar={onCadastrar} />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
