import { useState } from "react";
import "./App.css";

import InputForm from "./Components/InputForm";

function App() {
  const [numbers, setNumbers] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState(null);

  const handleCompare = () => {
    if (!numbers.trim() || target === "") {
      alert("Please enter numbers and a target value");
      return;
    }

    const list = numbers
      .split(",")
      .map((num) => Number(num.trim()))
      .filter((num) => !isNaN(num));

    const targetNum = Number(target);

    // List Membership Check
    let start = performance.now();
    const listFound = list.includes(targetNum);
    let listTime = performance.now() - start;

    // Set Membership Check
    const set = new Set(list);

    start = performance.now();
    const setFound = set.has(targetNum);
    let setTime = performance.now() - start;

    setResult({
      listFound,
      setFound,
      listTime: listTime.toFixed(6),
      setTime: setTime.toFixed(6),
    });
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>Set vs List Membership Checker</h1>
        <p>
          Compare performance of List O(n) and Set O(1) for membership checking
        </p>
      </div>

      {/* Main Card */}
      <div className="card">
        {/* Input Section */}
        <div className="input-section">
          <h2 className="section-title">Input Section</h2>

          <InputForm
            numbers={numbers}
            setNumbers={setNumbers}
            target={target}
            setTarget={setTarget}
            onCompare={handleCompare}
          />
        </div>

        {/* Results */}
        {result && (
          <div className="results-container">
            <h2 className="results-title">Results</h2>

            <div className="result-grid">
              <div className="result-card">
                <h3>List (O(n))</h3>

                <p>
                  Found:
                  <strong>
                    {" "}
                    {result.listFound ? "True" : "False"}
                  </strong>
                </p>

                <p>Time Taken:</p>

                <div className="time">
                  {result.listTime} ms
                </div>
              </div>

              <div className="result-card">
                <h3>Set (O(1) Average)</h3>

                <p>
                  Found:
                  <strong>
                    {" "}
                    {result.setFound ? "True" : "False"}
                  </strong>
                </p>

                <p>Time Taken:</p>

                <div className="time">
                  {result.setTime} ms
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Complexity Section */}
        <div className="complexity-section">
          <h2 className="complexity-title">Time Complexity</h2>

          <div className="complexity-grid">
            <div className="complexity-card">
              <h4>List Membership Check</h4>

              <div className="big-text orange">
                O(n)
              </div>

              <p>Linear time complexity</p>
            </div>

            <div className="complexity-card">
              <h4>Set Membership Check</h4>

              <div className="big-text green">
                O(1)
              </div>

              <p>Constant time complexity on average</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        Built with React | Performance Comparison Project
      </div>
    </div>
  );
}

export default App;