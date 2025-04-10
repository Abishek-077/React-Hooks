import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialState = {
  message="hi"
}

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: "HEY"
      }
  }

}

function App() {
  const [checked, toggke] = useReducer(
    (checked) => !checked,
    false
  );


  return (
    <>
      <P>Message:{state.message} </P>
    </>
  );

}




export default App

//CUSTOM HOOKS MAN WHAT IS THE HOPKS 



