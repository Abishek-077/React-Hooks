import { useReducer } from "react";
import React from "react";
import "./index.css";

function UseReducer() {
    const [number, setNumber] = useReducer(() => (number, newNumber) => number + newNumber, 0)
    return <h1>{number}</h1>
}