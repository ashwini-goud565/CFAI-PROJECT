function InputForm({
  numbers,
  setNumbers,
  target,
  setTarget,
  onCompare,
}) {
  return (
    <>
      <label htmlFor="numbers">
        Enter Numbers (comma separated)
      </label>

      <textarea
        id="numbers"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Example: 2,4,6,8,9,4,7"
      />

      <small
        style={{
          display: "block",
          marginTop: "8px",
          color: "#666",
        }}
      >
        You can enter duplicate numbers.
      </small>

      <br />

      <label htmlFor="target">
        Enter Number to Search
      </label>

      <input
        id="target"
        type="number"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Example: 9"
      />

      <div className="btn-container">
        <button onClick={onCompare}>
          Compare
        </button>
      </div>
    </>
  );
}

export default InputForm;