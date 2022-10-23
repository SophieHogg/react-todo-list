import React from "react";
import "./List.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faPen,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ toDo, completeTask, setUpdateData, deleteTask, editTask }) => {
    return (
        <>
            {toDo &&
                toDo
                    .sort((a, b) => (a.id > b.id ? 1 : -1))
                    .map((task, index) => {
                        return (
                            <React.Fragment key={task.id}>
                                <div className="App__taskList">
                                    <div className="App__taskList__task">
                                        <div
                                            className={
                                                task.completed
                                                    ? "App__taskList__task__completed"
                                                    : null
                                            }
                                        >
                                            <span className="App__taskList__task__text">
                                                {task.title}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="App__taskList__iconWrap">
                                        <div
                                            className="App__taskList__iconWrap__icon"
                                            title={
                                                task.completed
                                                    ? "Mark task as not completed"
                                                    : "Mark task as completed"
                                            }
                                            onClick={() =>
                                                completeTask(task.id)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faCircleCheck}
                                            />
                                        </div>
                                        {task.completed ? null : (
                                            <div
                                                className="App__taskList__iconWrap__icon"
                                                title="Edit"
                                                onClick={() => {
                                                    setUpdateData({
                                                        id: task.id,
                                                        title: task.title,
                                                        status: task.status
                                                            ? true
                                                            : false,
                                                    });
                                                    editTask();
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </div>
                                        )}
                                        <div
                                            className="App__taskList__iconWrap__icon"
                                            title="Delete"
                                            onClick={() => deleteTask(task.id)}
                                        >
                                            <FontAwesomeIcon
                                                icon={faTrashCan}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
        </>
    );
};

export default ToDo;
