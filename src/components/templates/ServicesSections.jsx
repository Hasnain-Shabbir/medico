import React from 'react';
import { Button, Container, Divider, ServiceCard } from '..';

const servicesCards = [
  {
    id: 1,
    title: 'Mental Health Service',
    description:
      'The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention',
    image: '/brain-icon.png',
    path: '#',
  },
  {
    id: 2,
    title: 'Eye Diseases Service',
    description:
      'The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention',
    image: '/eye-icon.png',
    path: '#',
  },
  {
    id: 3,
    title: 'Vaccination Service',
    description:
      'The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention',
    image: '/drop-icon.png',
    path: '#',
  },
  {
    id: 4,
    title: 'Cardiology Service',
    description:
      'The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention',
    image: '/heart-icon.png',
    path: '#',
  },
];

const ServicesSections = () => {
  return (
    <section>
      <Container>
        <div>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="md:w-2/3 xl:w-1/2">
              <p className="mb-1 font-bold uppercase text-primary-500">
                Services and treatments
              </p>
              <h2 className="text-3xl font-bold md:text-4xl lg:text-[46px] lg:leading-tight">
                More than 40 specialty and health care services
              </h2>
            </div>
            <Button title="See All Services" styles="hidden md:block" />
          </div>
          <Divider paddingVertical="py-4 md:py-6" />
          <div className="grid gap-9 lg:grid-cols-2">
            {servicesCards.map((cardData) => (
              <ServiceCard key={cardData.id} cardData={cardData} />
            ))}
            <Button title="See All Services" styles="md:hidden" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSections;
