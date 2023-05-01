import React from "react";
import "./styles.css";
import { FaTrash } from "react-icons/fa";

const TrashModal = ({ todo, inputText, setInputText, toDo, setToDo }) => {

  const trashHandler = () => {
    setToDo(
    toDo.map((el) => {
      if (el.id === todo.id) {
        return {
          ...el,
          trash: !el.trash,
        };
      }
      return el;
    }))
  };

  return (
    <div className="trash-modal">
      <FaTrash onClick={trashHandler} size=".7em" />
      <h3 className="trash-text">Move to Trash</h3>
    </div>
  );
};

export default TrashModal;
