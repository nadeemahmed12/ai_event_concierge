function HistoryList({ history }) {
  return (
    <div>
      <h2>Previous Searches</h2>

      {history.map((item) => {
        return (
          <div
            className="history-card"
            key={item._id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{item.venueName}</h3>
            <p>{item.location}</p>
            <p>{item.estimatedCost}</p>
            <p>{item.whyItFits}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HistoryList;
