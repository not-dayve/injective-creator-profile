import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChainId } from '@injectivelabs/ts-types';
import { WalletStrategy } from '@injectivelabs/wallet-strategy';
import { Wallet } from '@injectivelabs/wallet-base';
import { Wallet as WalletIcon } from 'lucide-react';
import './WalletConnect.css';

const walletStrategy = new WalletStrategy({
  chainId: ChainId.Mainnet,
  strategies: {},
});

function WalletConnect() {
  const [connecting, setConnecting] = useState(false);
  const navigate = useNavigate();

  const connectWallet = async (wallet: Wallet) => {
    setConnecting(true);
    try {
      walletStrategy.setWallet(wallet);
      const addresses = await walletStrategy.getAddresses();
      
      if (addresses && addresses.length > 0) {
        navigate(`/profile/${addresses[0]}`);
      }
    } catch (error) {
      console.error('Wallet connection error:', error);
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="wallet-connect">
      <div className="wallet-options">
        <button
          onClick={() => connectWallet(Wallet.Keplr)}
          disabled={connecting}
          className="wallet-button"
        >
          <WalletIcon size={20} />
          <span>Keplr</span>
        </button>
        
        <button
          onClick={() => connectWallet(Wallet.Leap)}
          disabled={connecting}
          className="wallet-button"
        >
          <WalletIcon size={20} />
          <span>Leap</span>
        </button>
        
        <button
          onClick={() => connectWallet(Wallet.Metamask)}
          disabled={connecting}
          className="wallet-button"
        >
          <WalletIcon size={20} />
          <span>Metamask</span>
        </button>
      </div>
      
      {connecting && (
        <p className="connecting-text">Connecting wallet...</p>
      )}
    </div>
  );
}

export default WalletConnect;
