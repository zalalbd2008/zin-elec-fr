import Hero from '@/features/home/components/hero';
import OurCompany from '@/features/home/components/our-company';
import Experience from '@/features/home/components/experience';
import ElectricalService from '@/components/common/electrical-service';
import ServiceList from '@/features/service/components/common/service-list';
import ServiceItem from '@/features/service/components/common/service-item';

export default async function Home() {
  return (
    <main>
      <Hero />
      <OurCompany />
      <Experience />

      <section className="relative bg-[#f1e8dc] ">
        <div className='overflow-hidden'>
          <div className="home-service-background h-[300px]" />
        </div>
        <div className="lg:container p-4 py-12 lg:px-[85px] ">
          <div className="relative ">
            <ServiceList show>
              <ServiceItem limit={4} />
            </ServiceList>
          </div>
        </div>
      </section>
      <ElectricalService />
    </main>
  );
}
