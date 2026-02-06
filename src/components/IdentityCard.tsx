import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './IdentityCard.css';

interface IdentityCardProps {
  address: string;
  displayName: string;
  roles: string[];
  linkedWallets: { chain: string; address: string }[];
  activeSince: string;
}

function IdentityCard({ displayName, roles, linkedWallets, activeSince }: IdentityCardProps) {
  const [walletsExpanded, setWalletsExpanded] = useState(false);

  return (
    <div className="identity-card">
      <div className="identity-header">
        <h1 className="display-name">{displayName}</h1>
        <div className="role-tags">
          {roles.map((role, index) => (
            <span key={index} className="role-tag">
              {role}
            </span>
          ))}
        </div>
      </div>

      {linkedWallets.length > 0 && (
        <div className="linked-wallets">
          <button
            onClick={() => setWalletsExpanded(!walletsExpanded)}
            className="wallets-toggle"
          >
            <span>Linked Wallets ({linkedWallets.length})</span>
            {walletsExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {walletsExpanded && (
            <div className="wallets-list">
              {linkedWallets.map((wallet, index) => (
                <div key={index} className="wallet-item">
                  <span className="wallet-chain">{wallet.chain}</span>
                  <span className="wallet-address">{wallet.address}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="active-since">
        Active on Injective since: <strong>{activeSince}</strong>
      </div>
    </div>
  );
}

export default IdentityCard;
