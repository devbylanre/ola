import { Container } from '@/components/Container';
import Feature from '@/sections/Feature';
import Hero from '@/sections/Hero';
import Service from '@/sections/Service';
import Skill from '@/sections/Skill';
import Work from '@/sections/Work';

export const metadata = {
  title: 'Ola | Website designer',
};

export default function Home() {
  return (
    <Container as={'main'}>
      {/* sections */}
      <Hero />
      <Skill />
      <Service />
      <Feature />
      <Work />
    </Container>
  );
}
