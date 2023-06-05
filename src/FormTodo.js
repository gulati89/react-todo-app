import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormTodo = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props.onAddTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormTodo;
