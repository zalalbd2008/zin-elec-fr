import { Metadata } from 'next';

import ElectricalService from '@/components/common/electrical-service';
import Hero from '@/components/common/hero';
import AboutUsList from '@/features/about-us/components/about-us-list';
import LightUpFuture from '@/features/about-us/components/light-up-ruture';

export const metadata: Metadata = {
  title: 'Propos',
};

async function Page() {
  return (
    <main>
      <Hero
        title1="A propos de"
        title2="nous"
        des="Découvrez qui nous sommes et ce qui nous anime dans notre histoire."
      />
      <AboutUsList />
      <LightUpFuture />
      <ElectricalService />
    </main>
  );
}

export default Page;
