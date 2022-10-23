import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List/List";
import "./App.scss";
import AddForm from "./components/AddForm/AddForm";
import UpdateForm from "./components/UpdateForm/UpdateForm";
import Header from "./components/Header/Header";

function App() {
    //Default Tasks - main state controlling to do list
    const [toDo, setToDo] = useState([
        {
            id: 1,
            title: "Hello! Please add a task to get started",
            status: false,
        },
    ]);
    //Temporary state
    const [newTask, setNewTask] = useState("");
    const [updateData, setUpdateData] = useState("");
    const [editing, setEditing] = useState(false);

    //Add task
    const addTask = () => {
        if (newTask) {
            let num = uuidv4();
            let newEntry = { id: num, title: newTask, status: false };
            setToDo([...toDo, newEntry]);
            setNewTask("");
        }
    };

    //Delete task
    const deleteTask = (id) => {
        let newTasks = toDo.filter((task) => task.id !== id);
        setToDo([...newTasks]);
    };

    //Complete task
    const completeTask = (id) => {
        const completedTask = toDo.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setToDo(completedTask);
    };

    const editTask = () => {
        setEditing(!editing);
    };

    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            title: e.target.value,
            completed: updateData.completed ? true : false,
        };
        setUpdateData(newEntry);
    };
    const updateTask = (e, id) => {
        let filterRecords = [...toDo].filter(
            (task) => task.id !== updateData.id
        );
        let updatedObject = [...filterRecords, updateData];
        setToDo(updatedObject);
        setUpdateData("");
        setEditing(false);
    };

    //Cancel update
    const cancelEdit = () => {
        setUpdateData("");
        setEditing(false);
    };

    return (
        <div className="App">
            <Header />

            {editing ? (
                <UpdateForm
                    updateData={updateData}
                    changeTask={changeTask}
                    updateTask={updateTask}
                    cancelEdit={cancelEdit}
                />
            ) : (
                <AddForm
                    addTask={addTask}
                    newTask={newTask}
                    setNewTask={setNewTask}
                />
            )}
            {/* Display tasks in list if tasks exist */}
            {toDo && toDo.length ? (
                ""
            ) : (
                <h3 className="App__taskList__empty">
                    Add a task to get started!
                </h3>
            )}

            <List
                toDo={toDo}
                completeTask={completeTask}
                setUpdateData={setUpdateData}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </div>
    );
}

export default App;
