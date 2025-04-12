// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { FaStar } from "react-icons/fa";

// const createArray = (length) => [...Array(length)];

// function Star({ selected = false, onSelect }) {
//   return (
//     <FaStar
//       color={selected ? "red" : "grey"}
//       onClick={onSelect}
//       style={{ cursor: "pointer" }}
//     />
//   );
// }

// function StarRating({ totalStars = 5 }) {
//   const [selectedStar, setSelectedStar] = useState(0);

//   return (
//     <div>
//       {createArray(totalStars).map((_, i) => (
//         <Star
//           key={i}
//           selected={selectedStar > i}
//           onSelect={() => setSelectedStar(i + 1)}
//         />
//       ))}
//       <p>{selectedStar} of {totalStars} stars</p>
//     </div>
//   );
// }

// ReactDOM.render(<StarRating totalStars={5} />, document.getElementById("root"));

// function App() {
//   const [status, setStatus] = useState("Not Delivered");

//   return (
//     <div>
//       <h1>The Package is: {status}</h1>
//       <button onClick={() => setStatus("Delevered")}>Deliver</button>
//     </div>


//   );
// }

// function App() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div>
//       <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
//       <p >{checked ? "Checked" : "Not Checked"}</p>
//     </div>
//   )
// }

// function App() {
//   return <StarRating totalStars={15} />;
// }

// export default App;

import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { FaStar } from "react-icons/fa";

// Home Rating Function 

const createArray = (length)=>[...Array(length)]

function Star({selected=false,onSelect}){
  <FaStar 
  color={selected?"yellow":"grey"}
  onClick={onSelect}
  />

  function StarRating({totalStars=5}){
    const [selectedStar,setSelectedStar]=useState(0);

    return (
      <div>
           createArray(totalStars).map((n,i)=>(
      <Star
      key={i}
      selected={selectedStar>i}
      onSelect={()=>setSelectedStar(i+1)}
      />
    ))
    <p>{totalStars} of {selectedStar}</p>
  </div>
    )
  }
  
 

}
