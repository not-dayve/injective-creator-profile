import { ProfileData } from '../types';

/**
 * Fetches profile data from on-chain sources
 * This is a mock implementation - in production, this would query:
 * - Injective blockchain via SDK
 * - Indexers for historical activity
 * - NFT metadata from IPFS/Arweave
 */
export async function fetchProfileData(address: string): Promise<ProfileData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock data - replace with actual on-chain queries
  const mockData: ProfileData = {
    displayName: `Creator ${address.slice(0, 8)}`,
    roles: ['Artist', 'Developer'],
    linkedWallets: [
      { chain: 'Ethereum', address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb' },
    ],
    activeSince: '2023',
    hasNativeBadge: true,
    contributions: [
      { label: 'NFTs Minted', value: 47 },
      { label: 'Collections Created', value: 3 },
      { label: 'dApps Interacted', value: 12 },
      { label: 'Campaigns Participated', value: 5 },
    ],
    featuredWork: [
      {
        title: 'Genesis Collection',
        type: 'NFT Collection',
        imageUrl: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: 'https://explorer.injective.network',
      },
      {
        title: 'Abstract Series #1',
        type: 'NFT',
        imageUrl: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: 'https://explorer.injective.network',
      },
      {
        title: 'Digital Landscapes',
        type: 'NFT Collection',
        imageUrl: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: 'https://explorer.injective.network',
      },
    ],
    activities: [
      {
        type: 'NFT Mint',
        protocol: 'Talis Protocol',
        timestamp: '2024-01-15 14:23:45',
        explorerLink: 'https://explorer.injective.network',
      },
      {
        type: 'Token Swap',
        protocol: 'Helix',
        timestamp: '2024-01-14 09:12:33',
        explorerLink: 'https://explorer.injective.network',
      },
      {
        type: 'Collection Created',
        protocol: 'Talis Protocol',
        timestamp: '2024-01-10 16:45:22',
        explorerLink: 'https://explorer.injective.network',
      },
      {
        type: 'Governance Vote',
        protocol: 'Injective DAO',
        timestamp: '2024-01-08 11:30:15',
        explorerLink: 'https://explorer.injective.network',
      },
      {
        type: 'NFT Transfer',
        protocol: 'Talis Protocol',
        timestamp: '2024-01-05 13:22:10',
        explorerLink: 'https://explorer.injective.network',
      },
      {
        type: 'Staking',
        protocol: 'Injective Hub',
        timestamp: '2024-01-03 10:15:30',
        explorerLink: 'https://explorer.injective.network',
      },
    ],
    externalLinks: {
      twitter: 'https://twitter.com',
      website: 'https://example.com',
      mirror: 'https://mirror.xyz',
    },
  };

  return mockData;
}
