import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaStar } from "react-icons/fa";

// Utility function to create an array of given length
const createArray = (length) => [...Array(length)];

function Star({ selected = false }) {
  return <FaStar color={selected ? "red" : "grey"} />;
}

function StarRating({ totalStars = 5 }) {
  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}

function App() {
  return <StarRating totalStars={10} />;
}

export default App;
