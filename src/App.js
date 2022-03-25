import "./App.css";

import React, { useEffect } from "react";
import { Button, Card, ListGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  var [todo, setTodo] = React.useState([]);
  var [useid, setId] = React.useState("");
  var [user, setUser] = React.useState("");

  useEffect(() => {
    getTodoList();
  }, []);

  function getTodoList() {
    fetch("https://jsonplaceholder.typicode.com/todos" + "/", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodo([...data]);
        console.log(todo);
        console.log(data);
      });
  }

  function getUser(id) {
    console.log(id, "I am id");

    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5%",
        }}
      >
        <div style={{ width: "40%" }}>
          {/* // <TodoList key={x.id} todoData={x}></TodoList> */}
          <Table striped bordered hover variant="Dark">
            <thead>
              <tr>
                <th>ToDo Id</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {todo.map((x) => (
              <tbody>
                <tr>
                  <td>{x.id}</td>
                  <td>{x.title}</td>
                  <td>{x.completed}</td>
                  <td>
                    <Button
                      onClick={() => {
                        getUser(x.userId);
                        setId(x.userId);
                      }}
                      variant="secondary"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Header>User Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Todo Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                {user.id}
              </ListGroup.Item>
              <ListGroup.Item>
                Todo Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                {user.username}
              </ListGroup.Item>
              <ListGroup.Item>User Id</ListGroup.Item>
              <ListGroup.Item>
                Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.name}
              </ListGroup.Item>
              <ListGroup.Item>
                Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.email}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
      {/* </header> */}
    </div>
  );
}

export default App;
