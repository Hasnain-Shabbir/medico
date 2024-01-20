import React from 'react';
import { Container, Divider, TreatmentCard } from '..';

const cardsData = [
  {
    id: 1,
    title: 'Pediatrician',
    description: 'For your health ',
    image: '/baby-health-checkup.png',
  },
  {
    id: 2,
    title: 'Cardiologist',
    description: 'For your health ',
    image: '/stethoscope.png',
  },
  {
    id: 3,
    title: 'Dermatologist',
    description: 'For your health ',
    image: '/women-face.png',
  },
];

const TreatmentsSections = () => {
  return (
    <section>
      <Container>
        <div>
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-[46px]">
              Dedicated to provide best treatment.
            </h2>
            <p className="text-lg md:text-xl">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine.
            </p>
          </div>
          <Divider paddingVertical="py-4 md:py-6 lg:py-10" />
          <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {cardsData.map((cardData) => (
              <TreatmentCard cardData={cardData} key={cardData.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TreatmentsSections;
