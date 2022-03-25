import React from "react";
import { Table } from "react-bootstrap";

function TodoList(todoData) {
  return (
    <Table striped bordered hover variant="Dark">
      <thead>
        <tr>
          <th>ToDo Id</th>
          <th>Title</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{todoData.userId}</td>
          <td>{todoData.title}</td>
          <td>{todoData.completed}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TodoList;
