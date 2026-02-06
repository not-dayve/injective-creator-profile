import React from 'react';
import './ContributionSnapshot.css';

interface Contribution {
  label: string;
  value: number | string;
}

interface ContributionSnapshotProps {
  contributions: Contribution[];
}

function ContributionSnapshot({ contributions }: ContributionSnapshotProps) {
  if (contributions.length === 0) {
    return (
      <div className="contribution-snapshot">
        <h2 className="section-title">Contribution Snapshot</h2>
        <div className="empty-contributions">
          <p>No Injective on-chain activity detected yet. This profile will populate automatically as activity occurs.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contribution-snapshot">
      <h2 className="section-title">Contribution Snapshot</h2>
      <div className="contributions-grid">
        {contributions.map((contribution, index) => (
          <div key={index} className="contribution-item">
            <div className="contribution-value">{contribution.value}</div>
            <div className="contribution-label">{contribution.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributionSnapshot;
