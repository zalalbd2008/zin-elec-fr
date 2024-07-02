import Hero from '@/components/common/hero';
import RecentArticles from '@/components/common/recent-articles';
import React from 'react';

async function Page() {
  return (
    <main>
      <Hero
        title1="Electricien Perpignan"
        des="Vous cherchez un électricien? Je suis votre expert de confiance pour tous vos besoins électriques dans la région."
        show
      />

      <section className="lg:px-[70px] lg:container my-5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <h2>hello</h2>
          </div>
          <RecentArticles />
        </div>
      </section>
    </main>
  );
}

export default Page;
