import React from "react";
import Plus from "../../UI/Plus/plus";

import "./styles.css";

const Actions = ({setStatus, inputText, setInputText, toDo, setToDo }) => {

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div className="actions">
      <div className="buttons">
        <button onClick={statusHandler} value={"To do"} className="to-do button">To Do</button>

        <button onClick={statusHandler} value={"Done"} className="done button">Done</button>

        <button onClick={statusHandler} value={"Trash"} className="trash button">Trash</button>
      </div>
      <div className="modal">
        <Plus
          inputText={inputText}
          setInputText={setInputText}
          toDo={toDo}
          setToDo={setToDo}
        />
      </div>
    </div>
  );
};

export default Actions;
