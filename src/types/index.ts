export interface ProfileData {
  displayName: string;
  roles: string[];
  linkedWallets: { chain: string; address: string }[];
  activeSince: string;
  hasNativeBadge: boolean;
  contributions: {
    label: string;
    value: number | string;
  }[];
  featuredWork?: {
    title: string;
    type: string;
    imageUrl: string;
    link: string;
  }[];
  activities: {
    type: string;
    protocol: string;
    timestamp: string;
    explorerLink: string;
  }[];
  externalLinks?: {
    twitter?: string;
    website?: string;
    mirror?: string;
  };
}
