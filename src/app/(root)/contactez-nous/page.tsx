import { Metadata } from 'next';

import Hero from '@/components/common/hero';
import ContactUsList from '@/features/contactez-nous/components/contact-us-list';


export const metadata: Metadata = {
  title: 'Contactez-Nous',
  description: 'Contactez-Nous électricien Perpignan',
};

async function Page() {
  return (
    <main>
      <Hero
        title1="contactez"
        title2="nous"
        des="N’hésitez pas à nous contacter pour toute question ou demande de renseignements. Nous sommes là pour vous aider à concrétiser vos projets électriques"
      />

      <ContactUsList />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187663.45587890272!2d2.5926838139387662!3d42.69860699206711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e4e80fd88fd%3A0x1c83306520f2dd4f!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1715591421541!5m2!1sfr!2sfr"
          width="100%"
          height="500px"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}

export default Page;
