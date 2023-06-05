import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = (props) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: props.todo.isDone ? "line-through" : "" }}>
        {props.todo.text}
      </span>
      <div>
        <Button
          variant="outline-success"
          onClick={() => props.onMarkTodo(props.index)}
        >
          ✓
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => props.onRemoveTodo(props.index)}
        >
          ✕
        </Button>
      </div>
    </div>
  );
};

export default Todo;
