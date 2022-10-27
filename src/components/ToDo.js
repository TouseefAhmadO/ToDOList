import React from "react";

const ToDo = (props) => {
    return (
        <div>
            <li>
                {props.text}
                <span>
                <i onClick={()=>{
                    props.onselect(props.id)
                }}
                id="close"
                    class="fa-solid fa-trash-can"></i>
                </span>
                {/* <span>
                <i onClick={()=>{
                    props.editTodo(props.id)}}
                class="fa-solid fa-pen-to-square"></i>
                </span> */}
            </li>
        </div>
    )
}

export default ToDo;
