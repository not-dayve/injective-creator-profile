import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import './ActivityLog.css';

interface Activity {
  type: string;
  protocol: string;
  timestamp: string;
  explorerLink: string;
}

interface ActivityLogProps {
  activities: Activity[];
}

function ActivityLog({ activities }: ActivityLogProps) {
  const [expanded, setExpanded] = useState(false);
  const displayActivities = expanded ? activities : activities.slice(0, 5);

  if (activities.length === 0) {
    return (
      <div className="activity-log">
        <h2 className="section-title">On-Chain Activity</h2>
        <div className="empty-activity">
          <p>No on-chain activity recorded yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="activity-log">
      <h2 className="section-title">On-Chain Activity</h2>
      
      <div className="activity-list">
        {displayActivities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-main">
              <div className="activity-type">{activity.type}</div>
              <div className="activity-protocol">{activity.protocol}</div>
              <div className="activity-timestamp">{activity.timestamp}</div>
            </div>
            <a
              href={activity.explorerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="activity-link"
              title="View on explorer"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>

      {activities.length > 5 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="expand-button"
        >
          {expanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp size={18} />
            </>
          ) : (
            <>
              <span>Show All ({activities.length} total)</span>
              <ChevronDown size={18} />
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default ActivityLog;
