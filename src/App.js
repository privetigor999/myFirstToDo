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

  const taskIsDone = (id) => {
    setTasks(
      tasks.map((obj) => {
        if (obj.id === id) {
          obj.isDone = !obj.isDone;
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

  const isEditText = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isEdit = !task.isEdit;
        }
        return task;
      })
    );
  };

  const handleChangeText = (id, field, event) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task[field] = event.target.value;
        }
        return task;
      })
    );
  };

  const result = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        text={task.text}
        isDone={task.isDone}
        isEdit={task.isEdit}
        taskIsDone={taskIsDone}
        removeTask={removeTask}
        isEditText={isEditText}
        handleChangeText={handleChangeText}
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
          {result}
        </div>
      </div>
    </div>
  );
}

export default App;
