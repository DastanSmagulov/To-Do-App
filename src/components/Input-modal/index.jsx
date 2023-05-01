import React from "react";
import { v4 as uuid } from "uuid";
import "./styles.css";

const InputModal = ({ inputText, setInputText, toDo, setToDo }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDo([
      ...toDo,
      { text: inputText, completed: false, id: uuid().slice(0, 8), trash: false},
    ]);
    setInputText("");
  };

  const handleEnter = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      submitToDoHandler();
    }
  };

  return (
    <div className="input-modal">
      <h3 className="input-text">Add new To-do</h3>
      <textarea
        onChange={inputTextHandler}
        // onChange={handleChange}
        className="text-area"
        // value={input}
        placeholder="Your text"
        value={inputText}
      ></textarea>
      <button
        onKeyDown={handleEnter}
        onClick={submitToDoHandler}
        className="input-button"
      >
        Add
      </button>
    </div>
  );
};

export default InputModal;
