import React from 'react';
import { Container, Divider, ReviewsSlider } from '..';

const reviews = [
  {
    id: 1,
    title:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy',
    user: {
      name: 'Mr. Williams',
      patient: 'Diabetes Patient',
      image: '/boy-smiling.png',
    },
    rating: 5,
  },
  {
    id: 2,
    title:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy',
    user: {
      name: 'Mr. Williams',
      patient: 'Diabetes Patient',
      image: '/boy-smiling.png',
    },
    rating: 2,
  },
  {
    id: 3,
    title:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy',
    user: {
      name: 'Mr. Williams',
      patient: 'Diabetes Patient',
      image: '/boy-smiling.png',
    },
    rating: 3,
  },
  {
    id: 4,
    title:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy',
    user: {
      name: 'Mr. Williams',
      patient: 'Diabetes Patient',
      image: '/boy-smiling.png',
    },
    rating: 4,
  },
];

const ReviewsSection = () => {
  return (
    <section>
      <Divider paddingVertical="py-6 lg:py-10" />
      <Container>
        <ReviewsSlider reviews={reviews} />
      </Container>
    </section>
  );
};

export default ReviewsSection;
