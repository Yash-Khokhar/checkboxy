import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const [checkedBox, setCheckedBox] = useState(0);

  useEffect(() => {
    let myInterval;
    if (checkedBox >= 1 && checkedBox <= 3) {
      myInterval = setInterval(() => {
        setCounter(counter => (counter + checkedBox) % 1000);
      }, 1000);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [checkedBox]);

  const fun = (a) => {
    if (checkedBox == a) {
      setCheckedBox(0);
    } else {
      setCheckedBox(a);
    }
  };

  return (
    <div className="container">
      <h1>Click on these buttons to ADD</h1>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input
          type="checkbox"
          onChange={() => fun(1)}
          checked={checkedBox == 1 ? true : false}
          name="counter"
          className="btn-check cb1"
          id="btncheck1"
          value="1"
        />

        <label className="btn btn-outline-primary cb1" for="btncheck1">
          Add 1
        </label>

        <input
          type="checkbox"
          onChange={() => fun(2)}
          checked={checkedBox == 2 ? true : false}
          name="counter"
          className="btn-check cb1"
          id="btncheck2"
          value="2"
        />

        <label className="btn btn-outline-primary cb1" for="btncheck2">
          Add 2
        </label>

        <input
          type="checkbox"
          onChange={() => fun(3)}
          checked={checkedBox == 3 ? true : false}
          name="counter"
          className="btn-check cb1"
          id="btncheck3"
          value="3"
        />

        <label className="btn btn-outline-primary cb1" for="btncheck3">
          Add 3
        </label>

        <div className="ans text">{counter}</div>
      </div>
    </div>
  );
}

export default App;
