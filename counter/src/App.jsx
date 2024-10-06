

import React, { useReducer } from 'react'

const initalState = {
  count : 0,
}

function reducer(state, action){
  switch (action.type){
    case "inc":
      return {...state, count : state.count + 1}
    case "dec": 
    return {...state, count: state.count -1}
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initalState)
  return (
   <>
   <button  onClick={()=> dispatch({type : "inc"})}>Increment</button>
   <p>{state.count}</p>
   <button onClick={()=> dispatch({type : "dec"})}>Decrement</button>
   </>
  )
}

export default App
