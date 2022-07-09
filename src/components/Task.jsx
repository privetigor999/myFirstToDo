import React from "react";
import donePng from "./../images/done.png";
import removePng from "./../images/remove.png";
import reversePng from "./../images/reverse.png";
import editPng1 from "./../images/edit1.png";
import editPng2 from "./../images/edit2.png";

const Task = ({
  id,
  text,
  isDone,
  taskIsDone,
  removeTask,
  isEdit,
  isEditText,
  handleChangeText,
}) => {
  return (
    <div className={isDone ? "doneTask" : "task"} key={id} id={id}>
      {!isEdit && (
        <img
          className="done"
          src={isDone ? reversePng : donePng}
          alt="done"
          onClick={() => taskIsDone(id)}
        />
      )}

      {!isDone && (
        <img
          className={isEdit ? "saveButton" : "editButton"}
          src={isEdit ? editPng2 : editPng1}
          alt="edit"
          onClick={() => {
            isEditText(id);
          }}
        />
      )}

      {isEdit ? (
        <input
          className="inputEdit"
          value={text}
          onChange={(event) => handleChangeText(id, event)}
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
