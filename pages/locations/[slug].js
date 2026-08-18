import { locations } from '../../data/locations';
import LocationPage from '../../components/LocationPage';

export default function LocationPageRoute({ location }) {
  return <LocationPage location={location} />;
}

export function getStaticProps({ params }) {
  const location = locations.find(loc => loc.slug === params.slug);
  if (!location) return { notFound: true };
  return { props: { location }, revalidate: 3600 };
}

export function getStaticPaths() {
  const paths = locations.map(location => ({ params: { slug: location.slug } }));
  return { paths, fallback: false };
}
