import React, { useState } from 'react';
import { Copy, Check, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProfileHeader.css';

interface ProfileHeaderProps {
  address: string;
  hasNativeBadge: boolean;
}

function ProfileHeader({ address, hasNativeBadge }: ProfileHeaderProps) {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 10)}...${addr.slice(-8)}`;
  };

  return (
    <div className="profile-header">
      <button onClick={() => navigate('/')} className="back-button">
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="header-content">
        <div className="address-section">
          <span className="address-text">{formatAddress(address)}</span>
          <button onClick={copyAddress} className="copy-button" title="Copy address">
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>

        <div className="header-badges">
          <div className="network-indicator">Injective</div>
          {hasNativeBadge && (
            <div className="native-badge" title="Derived from verifiable on-chain Injective ecosystem activity">
              Injective-Native
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
