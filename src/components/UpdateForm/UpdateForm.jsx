import React from "react";
import "./UpdateForm.scss";

const UpdateForm = ({ updateData, changeTask, updateTask, cancelEdit }) => {
    return (
        <div className="App__update">
            <input
                className="App__update__text"
                defaultValue={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                placeholder="Edit Mode: What would you like to edit this task to?"
            ></input>
            <div className="App__update__buttons">
                <button
                    className="App__update__buttons__update App__button"
                    onClick={updateTask}
                >
                    Update
                </button>
                <button
                    className="App__update__buttons__cancel App__button"
                    onClick={() => cancelEdit()}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default UpdateForm;
