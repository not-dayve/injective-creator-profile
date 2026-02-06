import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import WalletConnect from '../components/WalletConnect';
import './HomePage.css';

function HomePage() {
  const [searchAddress, setSearchAddress] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchAddress.trim()) {
      navigate(`/profile/${searchAddress.trim()}`);
    }
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <div className="network-badge">Injective</div>
          <h1 className="home-title">Creator Profile Verification</h1>
          <p className="home-subtitle">
            Verifiable on-chain contribution tracking for the Injective blockchain ecosystem
          </p>
        </div>

        <div className="home-actions">
          <div className="action-card">
            <h2 className="action-title">View Your Profile</h2>
            <p className="action-description">
              Connect your wallet to view and curate your on-chain contribution profile
            </p>
            <WalletConnect />
          </div>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="action-card">
            <h2 className="action-title">Search Creator Profile</h2>
            <p className="action-description">
              Enter an Injective wallet address to view public contribution data
            </p>
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-wrapper">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="inj1..."
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  className="search-input"
                />
              </div>
              <button type="submit" className="search-button">
                View Profile
              </button>
            </form>
          </div>
        </div>

        <div className="home-info">
          <div className="info-grid">
            <div className="info-item">
              <h3>On-Chain Verification</h3>
              <p>All contribution data sourced exclusively from Injective blockchain records</p>
            </div>
            <div className="info-item">
              <h3>Wallet-Anchored Identity</h3>
              <p>No social metrics, self-claims, or manual verification workflows</p>
            </div>
            <div className="info-item">
              <h3>Public Shareability</h3>
              <p>Each creator has a unique public URL derived from their wallet address</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
