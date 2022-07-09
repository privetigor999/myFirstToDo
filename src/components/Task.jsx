import React from "react";
import donePng from "./../images/done.png";
import removePng from "./../images/remove.png";
import reversePng from "./../images/reverse.png";

const Task = ({ id, text, isDone, taskIsDone, removeTask }) => {
  return (
    <div className={isDone ? "doneTask" : "task"} key={id} id={id}>
      <img
        className="done"
        src={isDone ? reversePng : donePng}
        alt="done"
        onClick={() => taskIsDone(id)}
      />
      <p>{text}</p>
      <img
        className="remove"
        src={removePng}
        alt="remove"
        onClick={() => removeTask(id)}
      />
    </div>
  );
};

export default Task;
