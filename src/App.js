import React, { useState, useEffect } from "react";
import "./App.css";
import Actions from "./components/Actions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoList from "./components/To-do_list";

function App() {
  // run once
  //state
  const [inputText, setInputText] = useState("");
  const [toDo, setToDo] = useState([]);
  const [status, setStatus] = useState("To-do");
  const [filteredToDos, setFilteredToDos] = useState([]);
  // useEffect

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [toDo, status]);

  // filter

  const filterHandler = () => {
    switch (status) {
      case "Done":
        setFilteredToDos(
          toDo.filter((todo) => todo.completed === true && todo.trash === false)
        );
        break;
      case "Trash":
        setFilteredToDos(toDo.filter((todo) => todo.trash === true));
        break;
      default:
        setFilteredToDos(
          toDo.filter(
            (todo) => todo.trash === false && todo.completed === false
          )
        );
        break;
    }
  };

  // Save to local
  const saveLocalTodos = () => {
      localStorage.setItem("toDo", JSON.stringify(toDo));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("toDo") === null) {
      localStorage.setItem("toDo", JSON.stringify([]));
    } else {
      let toDoFromLocal = JSON.parse(localStorage.getItem("toDo"));
      setToDo(toDoFromLocal)
      console.log(toDo, toDoFromLocal)
    }
  };

  // app
  return (
    <div className="App">
      <Header />
      <Actions
        inputText={inputText}
        setInputText={setInputText}
        toDo={toDo}
        setToDo={setToDo}
        setStatus={setStatus}
      />
      <h3 className="text-h3">{status}</h3>
      <hr className="line"></hr>
      <ToDoList
        status={status}
        inputText={inputText}
        setInputText={setInputText}
        toDo={toDo}
        setToDo={setToDo}
        filteredToDos={filteredToDos}
      />
      <Footer />
    </div>
  );
}

export default App;
