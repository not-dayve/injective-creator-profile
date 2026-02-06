import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import IdentityCard from '../components/IdentityCard';
import ContributionSnapshot from '../components/ContributionSnapshot';
import FeaturedWork from '../components/FeaturedWork';
import ActivityLog from '../components/ActivityLog';
import ExternalLinks from '../components/ExternalLinks';
import { fetchProfileData } from '../services/profileService';
import { ProfileData } from '../types';
import './ProfilePage.css';

function ProfilePage() {
  const { address } = useParams<{ address: string }>();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      if (!address) return;
      
      setLoading(true);
      try {
        const data = await fetchProfileData(address);
        setProfileData(data);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [address]);

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading on-chain data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!profileData || !address) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <div className="error-state">
            <p>Profile not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <ProfileHeader address={address} hasNativeBadge={profileData.hasNativeBadge} />
        
        <div className="profile-content">
          <IdentityCard
            address={address}
            displayName={profileData.displayName}
            roles={profileData.roles}
            linkedWallets={profileData.linkedWallets}
            activeSince={profileData.activeSince}
          />

          <ContributionSnapshot contributions={profileData.contributions} />

          {profileData.featuredWork && profileData.featuredWork.length > 0 && (
            <FeaturedWork items={profileData.featuredWork} />
          )}

          <ActivityLog activities={profileData.activities} />

          {profileData.externalLinks && (
            <ExternalLinks links={profileData.externalLinks} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
