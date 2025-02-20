import React, { useState, useEffect } from "react";
import "./Style.css";
const ToDoItem = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setitems] = useState([]);
  const additems = () => {
    if (!inputdata) {
    } else {
      setitems([...items, inputdata]);
      setinputdata("");
    }
  };
  const deleteitem = (id) => {
    console.log(id);
    const updateitem = items.filter((ele, index) => {
      return index !==id;
    });
    setitems(updateitem);
  };
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setitems(savedTasks);
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <div className="container">
        <h1 className="time-rom">Welcome to ToDolist</h1>
        <div className="inputdiv">
          <input
            type="text"
            placeholder="Add item..."
            id="input"
            value={inputdata}
            onChange={(e) => setinputdata(e.target.value)}
          />
          <button
            className="button"
            id="btn-danger"
            title="Add item"
            onClick={additems}
          >
            Add item
          </button>
        </div>
        <div className="showitem">
          {items.map((ele,index) => {
            return (
              <div className="multiitem" key={index}>
                <h3 className="" id="App">
                  {ele}
                </h3>
                <h3 id="Delete" onClick={() => deleteitem(index)}>
                  X
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
