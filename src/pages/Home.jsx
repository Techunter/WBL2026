import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PointsTable from '../components/PointsTable';
import Teams from '../components/Teams';
import FeatureCards from '../components/FeatureCards';
import Gallery from '../components/Gallery';
import Sponsors from '../components/Sponsors';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PointsTable />
      <Teams />
      <FeatureCards />
      <Gallery />
      <Sponsors />
    </Layout>
  );
}
