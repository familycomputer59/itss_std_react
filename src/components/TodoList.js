import React, { useState } from "react";
import "./TodoList.scss";
import { Zoom } from 'react-reveal'

const InitList = [
    {
        task: "Gyming",
        done: true
    },
    {
        task: "Do homework",
        done: false
    },
    {
        task: "Play game",
        done: false
    }
];
const TodoList = () => {
    var [list, setList] = useState(InitList);
    const [newTask, setNewTask] = useState();

    const createdTask = task => {
        const newList = [...list, { task }]
        setList(newList)
    }

    const completedTask = index => {
        const newList = [...list]
        newList[index].done = true;
        setList(newList)
    }

    const removedTask = index => {
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    return (
        <Zoom>
            <div className="ListContainer">
                <p className="list-head">Todo List</p>
                <div>
                    <form
                        className="form-submit"
                        onSubmit={e => {
                            e.preventDefault()
                            createdTask(newTask)
                            setNewTask("")
                        }
                        }
                    >
                        <input
                            required
                            className="input-submit"
                            placeholder="Hi, give me a task!"
                            tabIndex="1"
                            value={newTask}
                            onChange={(event) => {
                                setNewTask(event.target.value)
                            }
                            }
                        />
                        <button className="btn-submit" type="submit">
                            Pin now!
                    </button>
                    </form>

                </div>
                <div className="list-wrap">
                    {list.map((item, index) => {
                        return (
                                <div key={index} className="list-area">
                                    <div className="list-text" style={{ backgroundColor: `${item.done ? "#d3d3d3" : "#FFF"}` }}>
                                        <p style={{ textDecoration: `${item.done ? "line-through" : ""}` }}>{item.task}</p>
                                        <button
                                            className={`${item.done ? "list-button-done" : "list-button"}`}
                                            onClick={() => completedTask(index)}
                                        >
                                            <i className="fas fa-check" style={{ fontSize: 20, color: `${item.done ? "#565252" : "#22B8CF"}` }} />
                                        </button>
                                    </div>
                                    <button onClick={() => removedTask(index)}>
                                        <i className="fas fa-trash-alt" style={{ fontSize: 22 }} />
                                    </button>
                                </div>
                        )
                    }).reverse()}
                </div>

            </div>
        </Zoom>

    );
};

export default TodoList;
