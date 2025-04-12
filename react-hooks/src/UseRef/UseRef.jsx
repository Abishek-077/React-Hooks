import React, { useEffect, useRef } from "react";
import "./index.css";

// function UseRef() {
//   const sound = useRef();
//   const color = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const soundVal = sound.current.value;
//     const colorVal = color.current.value;
//     alert(`${soundVal} sounds like ${colorVal}`);
//     sound.current.value = "";
//     color.current.value = "";
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={sound} type="text" placeholder="Sound..." />
//       <input ref={color} type="color" />
//       <button type="submit">ADD</button>
//     </form>
//   );
// }

import React, { useRef, useEffect } from "react";

function UseRef() {
    const object = useRef();
    const color = useRef();

    const summit = (e) => {
        e.preventDefault();
        const objectVal = object.current.value;
        const colorVal = color.current.value;

        alert(`${objectVal} has exact HEX color ${colorVal}`);
        object.current.value = "";
        color.current.value = "";
    };

    useEffect(() => {
        console.log("Component mounted - you can simulate DB fetch here");
    }, []);

    return (
        <form onSubmit={summit}>
            <input ref={object} type="text" placeholder="Object" />
            <input ref={color} type="color" />
            <button type="submit">Add</button>
        </form>
    );
}

export default UseRef;
