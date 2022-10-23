import React from "react";
import "./AddForm.scss";

const AddForm = ({ addTask, newTask, setNewTask }) => {
    return (
        <div className="App__form">
            <input
                className="App__form__text"
                type="text"
                value={newTask || ""}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Please enter your task here!"
            ></input>
            <div className="App__form__buttons">
                <button
                    onClick={() => addTask()}
                    defaultValue=""
                    className="App__form__buttons__add App__button"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default AddForm;
