import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import AnnouncementTicker from '../components/home/AnnouncementTicker';
import QuickLinks from '../components/home/QuickLinks';
import PrincipalMessage from '../components/home/PrincipalMessage';
import KeyMetrics from '../components/home/KeyMetrics';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <div className="mt-32"> {/* Space for the feature cards that overlap from HeroBanner */}
        <AnnouncementTicker />
        <QuickLinks />
        <PrincipalMessage />
        <KeyMetrics />
      </div>
    </div>
  );
};

export default Home;