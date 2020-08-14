import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle, onChangeStatus }) => {
  const todoArr = [],
    doingArr = [],
    doneArr = [];

  const distributeTodos = useCallback(todos =>
    todos.map(
      todo => {
        if (todo.status === "todo") {
          todoArr.push(todo);
        } else if (todo.status === "doing") {
          doingArr.push(todo);
        } else if (todo.status === "done") {
          doneArr.push(todo);
        }
      },
      [todos]
    )
  );

  distributeTodos(todos);

  const genTodoListItem = arr => {
    return arr.map(todo => (
      <li>
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onChangeStatus={onChangeStatus}
        />
      </li>
    ));
  };

  return (
    <div className="TodoList">
      <div className="todo-area">
        <div className="todo-title">TODO</div>
        <div className="todo-content">
          <ul>{genTodoListItem(todoArr)}</ul>
        </div>
      </div>

      <div className="doing-area">
        <div className="doing-title">DOING</div>
        <div className="doing-content">
          <ul>{genTodoListItem(doingArr)}</ul>
        </div>
      </div>

      <div className="done-area">
        <div className="done-title">DONE</div>
        <div className="done-content">
          <ul>{genTodoListItem(doneArr)}</ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
