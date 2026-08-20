import { getLocationBySlug, locations } from '@/data/locations';
import Navigation from '@/components/Location/Navigation';
import Hero from '@/components/Location/Hero';
import StickyTabs from '@/components/Location/StickyTabs';
import { useState } from 'react';

export default function LocationPage({ location }) {
  const [activeTab, setActiveTab] = useState('about');

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div>
      <Navigation location={location} />
      <Hero location={location} />
      <StickyTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Section content for: {activeTab}</h2>
        <p>More sections coming soon...</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const location = getLocationBySlug(params.slug);
  
  if (!location) {
    return { notFound: true };
  }

  return {
    props: { location },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = locations.map((location) => ({
    params: { slug: location.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
