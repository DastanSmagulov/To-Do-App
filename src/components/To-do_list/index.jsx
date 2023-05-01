import React from "react";
import ToDoItem from "../To-do";
import "./styles.css";

const ToDoList = ({status, filteredToDos, inputText, setInputText, toDo, setToDo }) => {
  return (
    <div className="to-do">
      <ul className="todo-list">
        {filteredToDos.map((todo) => (
          <ToDoItem status={status} todo = {todo} inputText = {inputText} setInputText = {setInputText} toDo = {toDo} setToDo = {setToDo} key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
