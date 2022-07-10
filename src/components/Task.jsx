import React, { useState } from "react";
import donePng from "./../images/done.png";
import removePng from "./../images/remove.png";
import reversePng from "./../images/reverse.png";
import editPng1 from "./../images/edit1.png";
import editPng2 from "./../images/edit2.png";

const Task = ({
  id,
  text,
  isDone,
  toggleTaskIsDone,
  removeTask,
  isEdit,
  turnOnEditMode,
  onSaveTask,
}) => {
  const [value, setValue] = useState(text);

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleSaveOrEditTask = () => {
    if (isEdit) {
      onSaveTask(id, value);
    }
  };

  const handleTurnOnEditMode = () => turnOnEditMode(id);

  return (
    <div className={isDone ? "doneTask" : "task"} key={id} id={id}>
      {!isEdit && (
        <img
          className="done"
          src={isDone ? reversePng : donePng}
          alt="done"
          onClick={() => toggleTaskIsDone(id)}
        />
      )}

      {!isDone && (
        <img
          className={isEdit ? "saveButton" : "editButton"}
          src={isEdit ? editPng2 : editPng1}
          alt="edit"
          onClick={isEdit ? handleSaveOrEditTask : handleTurnOnEditMode}
        />
      )}

      {isEdit ? (
        <input
          className="inputEdit"
          value={value}
          onChange={handleChangeValue}
        />
      ) : (
        <p>{text}</p>
      )}

      {!isEdit && (
        <img
          className="remove"
          src={removePng}
          alt="remove"
          onClick={() => removeTask(id)}
        />
      )}
    </div>
  );
};

export default Task;
