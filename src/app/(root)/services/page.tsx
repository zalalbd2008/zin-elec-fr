import { Metadata } from 'next';

import ElectricalService from '@/components/common/electrical-service';
import Hero from '@/components/common/hero';

import Service from '@/features/service/components/service';


export const metadata: Metadata = {
  title: 'Services',
  description: 'Servicesélectricien Perpignan',
};

async function Page() {
  return (
    <main>
      <Hero
        title1="nos"
        title2="services"
        des="Découvrez une gamme complète de services électriques conçus pour répondre à vos besoins spécifiques et assurer votre tranquillité d’esprit"
      />
      <Service />
      <ElectricalService />
    </main>
  );
}

export default Page;
