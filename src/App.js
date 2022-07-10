import React, { useState } from "react";
import Task from "./components/Task";
import "./App.scss";
import uuid from "react-uuid";

const initTasks = [
  { id: uuid(), text: "Рыбалка", isDone: false, isEdit: false },
  { id: uuid(), text: "Поход", isDone: false, isEdit: false },
  { id: uuid(), text: "Отдых", isDone: false, isEdit: false },
];

function App() {
  const [tasks, setTasks] = useState(initTasks);
  const [value, setValue] = useState("");

  const toggleTaskIsDone = (id) => {
    setTasks(
      tasks.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            isDone: !obj.isDone,
          };
        }
        return obj;
      })
    );
  };

  const removeTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const addTask = () => {
    if (value.trim()) {
      const newTask = {
        id: uuid(),
        text: value[0].toUpperCase() + value.slice(1).toLowerCase(),
        isDone: false,
      };
      setTasks([newTask, ...tasks]);
      setValue("");
    }
  };

  const turnOnEditMode = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isEdit: !task.isEdit,
          };
        }
        return task;
      })
    );
  };

  const handleSaveChangedTask = (id, value) => {
    const tasksChanged = tasks.map((task) => {
      let obj = task;
      if (task.id === id) {
        obj = {
          ...task,
          text: value,
          isEdit: !task.isEdit,
        };
      }
      return obj;
    });
    setTasks(tasksChanged);
  };

  const result = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        text={task.text}
        isDone={task.isDone}
        isEdit={task.isEdit}
        toggleTaskIsDone={toggleTaskIsDone}
        removeTask={removeTask}
        turnOnEditMode={turnOnEditMode}
        onSaveTask={handleSaveChangedTask}
      />
    );
  });
  return (
    <div className="wrapper">
      <div className="todoWrapper">
        <div className="header">
          <p>Введите задачу: </p>
          <div className="inputButton">
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={addTask}>Добавить</button>
          </div>
        </div>
        <div className="body">
          <p>
            Всего задач: <b>{tasks.length}</b>
          </p>
          <div className="result"> {result}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
