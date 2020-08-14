import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./TodoComponent/TodoTemplate";
import TodoInsert from "./TodoComponent/TodoInsert";
import TodoList from "./TodoComponent/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Todo 리스트를 관리할 수 있습니다.",
      checked: false,
      status: "todo"
    },
    {
      id: 2,
      text: "Start 버튼을 누르면 시작됩니다!",
      checked: false,
      status: "todo"
    },
    {
      id: 3,
      text: "- 버튼을 눌러 리스트에서 제거할 수 있습니다.",
      checked: false,
      status: "todo"
    },
    {
      id: 4,
      text: "현재 진행하고 있는 일의 리스트입니다.",
      checked: false,
      status: "doing"
    },
    {
      id: 5,
      text: "해당 일을 모두 끝냈다면 체크 버튼을 눌러주세요!",
      checked: false,
      status: "doing"
    },
    {
      id: 6,
      text: "리스트를 제거하고 싶다면 - 버튼을 눌러주세요.",
      checked: true,
      status: "done"
    }
  ]);

  const nextId = useRef(7);
  /**
   * 사용자로부터 typed된 값을 객체화 시킨 후 state로 업데이트
   *
   * @text TodoInsert의 state중 하나인 typedValue
   * @nextId 객체의 id값이 될 값
   */
  const addInsertedValue = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        status: "todo"
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  /**
   * 사용자가 '제거'버튼을 클릭한 이벤트 발생 시 해당 객체의 id값을 제외한 나머지 객체로 state 업데이트
   *
   * @id TodoListItem -> TodoList -> Todo로 넘겨진 todos state의 id
   */
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id
            ? { ...todo, checked: !todo.checked, status: "done" }
            : todo
        )
      );
    },
    [todos]
  );

  const onChangeStatus = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, status: "doing" } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={addInsertedValue} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onChangeStatus={onChangeStatus}
      />
    </TodoTemplate>
  );
};

export default Todo;
