import React from 'react';
import { ExternalLink } from 'lucide-react';
import './FeaturedWork.css';

interface FeaturedItem {
  title: string;
  type: string;
  imageUrl: string;
  link: string;
}

interface FeaturedWorkProps {
  items: FeaturedItem[];
}

function FeaturedWork({ items }: FeaturedWorkProps) {
  return (
    <div className="featured-work">
      <h2 className="section-title">Featured Work</h2>
      <div className="featured-grid">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-item"
          >
            <div className="featured-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="featured-info">
              <div className="featured-type">{item.type}</div>
              <div className="featured-title">{item.title}</div>
              <ExternalLink size={16} className="featured-link-icon" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FeaturedWork;
