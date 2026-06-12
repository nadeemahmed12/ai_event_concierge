import { useState,useEffect } from "react";
import EventForm from "./components/EventForm";
import HistoryList from "./components/HistoryList";
import axios from "axios";
import "./App.css"


function App() {

  const [proposal,setProposal] = useState(null);
  const [history,setHistory] = useState([]);

  async function fetchHistory() {
    const response = await axios.get(
      "http://localhost:3000/api/events/history",
    );
    setHistory(response.data);
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="container">
      <h1>AI Event Concierge</h1>

      <EventForm
        setProposal={setProposal}
        fetchHistory={fetchHistory}
      />

      {proposal && (
  <div className="proposal-card">

    <h2>Current Proposal</h2>

    <h3>{proposal.venueName}</h3>

    <p>
      📍 {proposal.location}
    </p>

    <p>
      💰 {proposal.estimatedCost}
    </p>

    <p>
      {proposal.whyItFits}
    </p>

  </div>
)}
      <HistoryList history={history}/>
    </div>
  );
}

export default App;