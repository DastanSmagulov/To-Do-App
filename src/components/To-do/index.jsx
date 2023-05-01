import React, { useState } from "react";
import DeleteModal from "../Delete-modal";
import { FaCheck } from "react-icons/fa";
import "./styles.css";
import TrashModal from "../Trash-modal";

const ToDoItem = ({status, todo, text, inputText, setInputText, toDo, setToDo }) => {
  const [isModalTrashShown, setIsModalTrashShown] = useState(false);
  const [isModalDeleteShown, setIsModalDeleteShown] = useState(false);
  const openTrash = () => {
    setIsModalTrashShown(!isModalTrashShown);
  };

  const openDelete = () => {
    setIsModalDeleteShown(!isModalDeleteShown);
  }

  const completeHandler = () => {
    setToDo(
      toDo.map((elem) => {
        if (elem.id === todo.id) {
          return {
            ...elem,
            completed: !elem.completed,
          };
        }
        return elem;
      })
    );
  };
  // const deleteHandler = () => {

  // }
  let activeFunction = ()=>{
      
    }

    todo.trash ? activeFunction = openDelete : activeFunction = openTrash;

  return (
    <li style={{ listStyle: "none", marginBottom: "16px" }}>
      <div className={`to-do-item ${todo.completed ? "completed-div" : ""}`}>
        <button
          className={`button-dots ${todo.completed ? "completed-dots" : ""} ${todo.completed ? "button-done" : ""}`}
        >
          <span onClick={activeFunction} className={"dots"}>
            &#8942;
          </span>
        </button>
        <div
          onClick={completeHandler}
          className={`checkBox ${todo.completed ? "completed-checkbox" : ""}`}
        >
          <FaCheck
            size=".7em"
            style={{ marginBottom: "10px", color: "white" }}
          />
        </div>
        <h3 className={`to-do-text ${todo.completed ? "completed-text" : ""}`}>
          {text}
        </h3>
      </div>

      {isModalTrashShown && (
        <TrashModal
          todo={todo}
          inputText={inputText}
          setInputText={setInputText}
          toDo={toDo}
          setToDo={setToDo}
        />
      )}

      {isModalDeleteShown && (
        <DeleteModal
          todo={todo}
          inputText={inputText}
          setInputText={setInputText}
          toDo={toDo}
          setToDo={setToDo}
        />
      )}
    </li>
  );
};

export default ToDoItem;
