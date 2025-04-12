import React from "react";
import { useReducer } from "react";
import "./index.css";

const initialState = {
    message: "hey"
}

function reducer(state, action) {
    switch (action.type) {
        case "sunday":
            return {
                message: "Push Day"
            }
        case "Monday":
            return {
                message: "Pull Day"
            }
        case "Tuesday":
            return {
                message: "Leg Day"
            }
    }
}


function DispatchingUseReducer() {
    cons[state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <>
            <p>Mesage:{state.message}</p>
            <button onClick={() => dispatch({ type: "Sunday" })}>Sunday</button>
            <button onClick={() => dispatch({ type: "Monday" })}>Monday</button>
            <button onClick={() => dispatch({ type: "Tuesday" })}>Tuesday</button>

        </>
    )
}