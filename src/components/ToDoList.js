import React, { useState, useEffect } from "react";
import './ToDo.css';
import ToDo from "./ToDo";

const ToDoList = () => {
  const [Input, setInput] = useState("");
  const [Items, setItems] = useState([]);
  const [Para, setPara] = useState("");
  const [style, setStyle] = useState(null);

  useEffect(() => {
    let match = Items.find((event) => event == Input);
    let styling = Items.findIndex((event) => event == Input);
    let Field = Input;
    (Field) == match ? setPara("It is Already exists") : setPara("");
    if (!match || style) {
      setStyle(styling);
    }
    else {
      setStyle("")
    }
  }, [Input]);


  const textHandle = (e) => {
    setInput(e.target.value);
  }

  const ItemList = (e) => {
    let Field = Input;
    let result = Items.find((event) => event == Input)

    setPara('');

    e.preventDefault();

    (Field) == result || (Field) == "" ? setPara("It is Already exists") :
      setItems((oldItems) => {
        return [...oldItems, Input];
      });

    setInput("");
  }

  const deleteitm = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }

  const deleteall = () => {
    setItems([]);
  }

  return (
    <div className="card">
      <h1 className="head">To-Do List</h1>
      <div>
        <input className="input" type="text" value={Input} placeholder='Type Here' onChange={textHandle} />
        <button className="btn" onClick={ItemList}>Add Item</button>
        <p className="parastyle"> {Para}</p>
      </div>
      <div>
        <ol className="list">
          {Items.map((Itemval, index) => {
            return (
              <div style={{ color: style == index ? "red" : "black" }}>
                <ToDo
                  key={index}
                  id={index}
                  onselect={deleteitm}
                  text={Itemval}
                />
              </div>
            )
          })}
        </ol>
        <button className="btn" onClick={deleteall}>Remove All</button>
      </div>
    </div>
  )
}

export default ToDoList