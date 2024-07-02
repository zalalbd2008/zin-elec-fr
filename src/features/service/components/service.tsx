import React from 'react';
import ServiceList from './common/service-list';
import ServiceItem from '@/features/service/components/common/service-item';

async function Service() {
  return (
    <section className="bg-[#F1E8DC] ">
      <div className="shape" />
      <div className="lg:container p-4 py-7 lg:px-[85px] z-10">
        <ServiceList show={false}>
          <ServiceItem limit="all" />
        </ServiceList>
      </div>
    </section>
  );
}

export default Service;
