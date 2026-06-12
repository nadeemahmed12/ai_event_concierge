import { useState, useEffect } from "react";
import axios from "axios";

function EventForm({ setProposal, fetchHistory }) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (description.trim() === "") {
      setError("Please enter an event description.");
      return;
    }

    try {
      setError("");
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/events/generate",
        { description },
      );

      setProposal(response.data);

      await fetchHistory();

      setDescription("");
    } catch (error) {
      if (error.response?.status === 503) {
        setError(
          "AI service is currently busy. Please try again in a few seconds.",
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);

          if (error) {
            setError("");
          }
        }}
        placeholder="Describe your event..."
      />

      <br />

      <button type="submit" disabled={loading}>
        Generate Proposal
      </button>

      {loading && (
        <>
          <div className="spinner"></div>
          <p>AI is planning your event...</p>
        </>
      )}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default EventForm;
