import React, { useState } from "react";
import ReactDOM from "react-dom"; // Correct import statement

import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="red" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <StarRating size={24} color="blue" className="test" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
