function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="result-card">
      <h3>Results</h3>

      <p>List Found: {result.listFound.toString()}</p>
      <p>Set Found: {result.setFound.toString()}</p>

      <p>List Time: {result.listTime} ms</p>
      <p>Set Time: {result.setTime} ms</p>
    </div>
  );
}

export default ResultCard;