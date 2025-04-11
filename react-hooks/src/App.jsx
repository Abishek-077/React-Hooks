import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return (
    <FaStar
      color={selected ? "red" : "grey"}
      onClick={onSelect}
    />
  );
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </div>
  );
}

// Example render (if needed):
ReactDOM.render(<StarRating totalStars={5} />, document.getElementById("root"));


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

function App() {
  return <StarRating totalStars={10} />;
}

export default App;
