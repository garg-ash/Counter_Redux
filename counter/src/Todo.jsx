import React, { useReducer } from 'react'
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


const initalState = {
    input : "",
    tasks : []
}

function reducer(state, action){
    switch (action.type){
        case "setInput":
            return {...state, input: action.payload}
         case "addTask":
            const obj = {id: Date.now(), task : state.input}
            return {...state, tasks: [...state.tasks, obj], input: " "}   
    }
}

const Todo = () => {

    const [state, dispatch] = useReducer(reducer, initalState )

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type : "addTask"})
    
    }
    

  return (
    <>
    <h3>Todo Task</h3>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Add your Task' value={state.input} onChange={(e)=> dispatch ({type : "setInput", payload: e.target.value})} />
        <button type='submit'>Add Task</button>
    </form>

    <ul>{state.tasks.map((obj)=>{
        return <li key={obj.id}>
            {obj.task}
            {<CiEdit />}
            {<MdDelete />}
            {<FaCheck />}
        </li>
    })}
    </ul>
    </>
  )
}

export default Todo