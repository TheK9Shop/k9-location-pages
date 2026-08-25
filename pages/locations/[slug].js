import { getLocationBySlug, locations } from '@/data/locations';
import Navigation from '@/components/Location/Navigation';
import Hero from '@/components/Location/Hero';
import StickyTabs from '@/components/Location/StickyTabs';
import InfoBar from '@/components/Location/InfoBar';
import About from '@/components/Location/About';
import FeaturedProducts from '@/components/Location/FeaturedProducts';
import WhatWeCarry from '@/components/Location/WhatWeCarry';
import Events from '@/components/Location/Events';

export default function LocationPage({ location }) {
  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div>
      <Navigation location={location} />
      <Hero location={location} />
      <StickyTabs />
      <InfoBar location={location} />
      
      {/* About Section */}
      <div id="about">
        <About location={location} />
      </div>

      {/* Featured Products Section */}
      <FeaturedProducts location={location} />

      {/* What We Carry Section */}
      <WhatWeCarry location={location} />

      {/* Events Section */}
      <div id="events">
        <Events location={location} />
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
