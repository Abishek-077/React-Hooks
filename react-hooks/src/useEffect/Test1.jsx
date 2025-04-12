import React, { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function Test1() {
    const [name, setName] = useEffect("Abishek Ghimire");
    const [admin, setAdmin] = useEffect(false);

    useEffect(() => {
        document.title(`Welcome ${name}`);
    }, [name]);

    useEffect(() => {
        console.log(`The user is ${admin ? "admin" : "Not An Admin"}`)
    }, [admin])

    return (
        <div>
            <h1>Welcome to the hood {name}</h1>
            <button onClick={() => setName("ABIXOP")}></button>
            <p>{admin ? "loggedIn" : "not loggedIn"}</p>
            <button onClick={() => setAdmin(true)}>LogIn</button>
        </div>

    )

}