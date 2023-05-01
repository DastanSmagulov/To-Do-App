import React, { useState } from "react";
import InputModal from "../../components/Input-modal";
import "./styles.css";

const Plus = ({todo, inputText, setInputText, toDo, setToDo }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const openModal = () => {
    setIsModalShown(!isModalShown);
  };
  return (
    <div className="modal-plus">
      <button onClick={openModal} className="plus">
        +
      </button>
      {isModalShown && <InputModal todo = {todo} inputText={inputText} setInputText = {setInputText} toDo = {toDo} setToDo = {setToDo} />}
    </div>
  );
};

export default Plus;
