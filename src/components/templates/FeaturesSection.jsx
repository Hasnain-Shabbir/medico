import React from 'react';
import Image from 'next/image';
import { Button, Container, Divider } from '..';

const featuresData = [
  { id: 1, title: 'Safety First Quality Must' },
  { id: 2, title: 'Patient-Centric Approach' },
  { id: 3, title: 'Focused Leadership' },
  { id: 4, title: 'Cutting-Edge Technology' },
  { id: 5, title: 'Transparent Pricing' },
  { id: 6, title: 'Coordinated Care' },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white">
      <Divider paddingVertical="py-10" />
      <Container>
        <div className="lg:px-24">
          <div className="flex flex-col-reverse gap-14 sm:flex-row sm:justify-between">
            <div className="relative flex justify-center sm:w-1/2 md:max-w-[385px]">
              <Image
                src="/girl-with-phone.png"
                alt="girl-with-phone"
                width={264}
                height={200}
                className="relative z-[3] object-cover"
              />
              <div className="absolute bottom-0 h-[128px] w-full rounded-2.5xl bg-secondary"></div>
            </div>
            <div className="sm:w-1/2 lg:pl-12 xl:pl-16">
              <h2 className="mb-5 text-3xl font-bold md:mb-8 md:text-4xl lg:text-[40px]">
                Why Choose Us?
              </h2>
              <ul className="space-y-6">
                {featuresData.map((feature) => (
                  <li key={feature.id} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500">
                      <Image src="/white-tick.svg" width={12} height={12} />
                    </span>
                    <p className="text-xl font-medium">{feature.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 md:mt-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-[40px]">
              Wellness, Compassion, Quality
            </h2>
            <p className="mb-10 text-lg md:text-xl">
              They live in Bookmarks grove right at the coast of the Semantics,
              a large language ocean. A small river named Duded flows by their
              place and supplies it.
            </p>
            <Button title="Take An Appointment" styles="md:w-max" />
          </div>
        </div>
      </Container>
      <Divider paddingVertical="py-10" />
    </section>
  );
};

export default FeaturesSection;
