function ProposalCard({ proposal }) {
  return (
    <div className="proposal-card">
      <h2>Current Proposal</h2>

      <h3>{proposal.venueName}</h3>

      <p>📍 {proposal.location}</p>

      <p>💰 {proposal.estimatedCost}</p>

      <p>{proposal.whyItFits}</p>
    </div>
  );
}

export default ProposalCard;