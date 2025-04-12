import React, { useReducer } from "react";
import "./index.css";

const initialState = {
    message: "Hey",
};

function reducer(state, action) {
    switch (action.type) {
        case "Sunday":
            return { message: "Push Day" };
        case "Monday":
            return { message: "Pull Day" };
        case "Tuesday":
            return { message: "Leg Day" };
        default:
            return state;
    }
}

function DispatchingUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>Message: {state.message}</p>
            <button onClick={() => dispatch({ type: "Sunday" })}>Sunday</button>
            <button onClick={() => dispatch({ type: "Monday" })}>Monday</button>
            <button onClick={() => dispatch({ type: "Tuesday" })}>Tuesday</button>
        </>
    );
}

export default DispatchingUseReducer;
