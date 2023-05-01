import React from "react";
import "./styles.css";
import { FaTrash } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";

const DeleteModal = ({ todo, inputText, setInputText, toDo, setToDo }) => {
  const deleteHandler = () => {
    setToDo(toDo.filter((el) => el.id !== todo.id));
  };

  const backToDo = () => {
    setToDo(
      toDo.map((elem) => {
        if (elem.id === todo.id) {
          return {
            ...elem,
            trash: !elem.trash,
          };
        }
        return elem;
      })
    );
  };

  return (
    <div className="delete-modal">
      <div style={{ display: "flex", alignItems: "center" }} className="delete">
        <FaTrash onClick={deleteHandler} size=".7em" />
        <h3 className="delete-text">Delete Forever</h3>
      </div>
      <div style={{ display: "flex", alignItems: "center" }} className="back">
        <FaCheckDouble onClick={backToDo} size=".7em" />
        <h3 className="delete-text">Move back to To Do</h3>
      </div>
    </div>
  );
};

export default DeleteModal;
