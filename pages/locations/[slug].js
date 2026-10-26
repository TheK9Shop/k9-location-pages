import { Fragment, useMemo } from 'react';
import { getLocationBySlug, locations } from '@/data/locations';
import SiteNav from '@/components/SiteNav';
import ClosureBanner from '@/components/Location/ClosureBanner';
import Hero from '@/components/Location/Hero';
import StickyTabs from '@/components/Location/StickyTabs';
import InfoBar from '@/components/Location/InfoBar';
import ContactBanner from '@/components/Location/ContactBanner';
import About from '@/components/Location/About';
import ExpertSection from '@/components/Location/ExpertSection';
import FeaturedProducts from '@/components/Location/FeaturedProducts';
import WhatWeCarry from '@/components/Location/WhatWeCarry';
import ShopByCategory from '@/components/Location/ShopByCategory';
import Gallery from '@/components/Location/Gallery';
import Reviews from '@/components/Location/Reviews';
import Events from '@/components/Location/Events';
import SiteFooter from '@/components/SiteFooter';

// Section order for every store, except the ones listed below
const DEFAULT_ORDER = ['about', 'products', 'what-we-carry', 'shop-by-category', 'gallery', 'reviews'];

// Bohemia and Massapequa: Shop by Category first.
// The Expert section sits right after About (rendered inside the 'about' case).
const ORDER_BY_STORE = {
  bohemia: ['shop-by-category', 'about', 'products', 'what-we-carry', 'gallery', 'reviews'],
  massapequa: ['shop-by-category', 'about', 'products', 'what-we-carry', 'gallery', 'reviews'],
};

const TAB_LABELS = {
  about: 'About',
  products: 'Featured Products',
  'what-we-carry': 'What We Carry',
  'shop-by-category': 'Shop by Category',
  gallery: 'Gallery',
  reviews: 'Reviews',
};

export default function LocationPage({ location }) {
  if (!location) {
    return <div>Location not found</div>;
  }

  const order = ORDER_BY_STORE[location.slug] || DEFAULT_ORDER;

  // Only sections with a menu label get a tab
  const tabs = useMemo(
    () => order.filter((id) => TAB_LABELS[id]).map((id) => ({ target: id, label: TAB_LABELS[id] })),
    [location.slug]
  );

  const renderSection = (id) => {
    switch (id) {
      case 'about':
        return (
          <Fragment key={id}>
            <div id="about"><About location={location} /></div>
            <ExpertSection location={location} />
          </Fragment>
        );
      case 'products':
        return <FeaturedProducts key={id} location={location} />;
      case 'what-we-carry':
        return <WhatWeCarry key={id} location={location} />;
      case 'shop-by-category':
        return <ShopByCategory key={id} location={location} />;
      case 'gallery':
        return <Gallery key={id} location={location} />;
      case 'reviews':
        return <Reviews key={id} location={location} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <SiteNav />
      <ClosureBanner locationSlug={location.slug} />
      <Hero location={location} />
      <StickyTabs tabs={tabs} />
      <InfoBar location={location} />
      <ContactBanner location={location} />

      {order.map((id) => renderSection(id))}

      {/* Events stays on the page but has no menu tab */}
      <div id="events">
        <Events location={location} />
      </div>

      <SiteFooter contactUrl={location.contactUrl} />
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