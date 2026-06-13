import { useState, useEffect } from "react";
import EventForm from "./components/EventForm";
import HistoryList from "./components/HistoryList";
import ProposalCard from "./components/ProposalCard";
import axios from "axios";
import "./App.css";

function App() {
  const [proposal, setProposal] = useState(null);
  const [history, setHistory] = useState([]);

  async function fetchHistory() {
    const response = await axios.get(
      "https://ai-event-concierge-jx6m.onrender.com/api/events/history",
    );
    setHistory(response.data);
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="container">
      <h1>AI Event Concierge</h1>

      <EventForm setProposal={setProposal} fetchHistory={fetchHistory} />

      {proposal && <ProposalCard proposal={proposal} />}
      <HistoryList history={history} />
    </div>
  );
}

export default App;
