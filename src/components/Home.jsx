import React from "react";
import Dados from "./Dados";
import AddDado from "./AddDado";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home({ dados, onLogout, onDelete, onEditDado, onAddDado }) {
  return (
    <Container className="mt-5">
      <Row>
        <Col style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            className="button btn btn-primary text-right"
            style={{
              textAlign: "right",
              position: "relative",
              display: "flex",
              right: "0px",
              color: "white",
              marginBottom: "10px",
            }}
            onClick={onLogout}
          >
            Logout
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Dados
            dados={dados}
            onDelete={onDelete}
            onEditDado={onEditDado}
          ></Dados>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddDado onAddDado={onAddDado} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
