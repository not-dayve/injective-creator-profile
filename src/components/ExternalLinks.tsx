import React from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import './ExternalLinks.css';

interface ExternalLinksProps {
  links: {
    twitter?: string;
    website?: string;
    mirror?: string;
  };
}

function ExternalLinks({ links }: ExternalLinksProps) {
  const hasLinks = links.twitter || links.website || links.mirror;

  if (!hasLinks) {
    return null;
  }

  return (
    <div className="external-links">
      <h2 className="section-title">External Links</h2>
      <p className="links-disclaimer">Off-chain references provided by creator</p>
      
      <div className="links-grid">
        {links.twitter && (
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <span>Twitter/X</span>
            <ExternalLinkIcon size={16} />
          </a>
        )}
        
        {links.website && (
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <span>Website</span>
            <ExternalLinkIcon size={16} />
          </a>
        )}
        
        {links.mirror && (
          <a
            href={links.mirror}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <span>Mirror</span>
            <ExternalLinkIcon size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default ExternalLinks;
