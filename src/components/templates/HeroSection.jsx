import React from 'react';
import { Button, Container } from '..';

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="md:gap-12.5 flex flex-col gap-6 text-center md:flex-row md:text-left lg:grid-cols-2 xl:gap-16">
          <div className="relative flex max-h-[447px] items-end justify-center rounded-2.5xl bg-secondary md:w-1/2 md:max-w-[497px]">
            <img src="/hero-img.png" alt="doctor" />
            <div className="max-w-45 absolute bottom-5 flex items-center gap-4 rounded-md bg-white px-3 py-3 text-left xl:-left-20 xl:bottom-auto xl:top-20">
              <img src="/heart-mind.png" alt="brain" />
              <p className="text-sm">More than 10k Patients treated!</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="mb-1 font-bold text-primary-500 md:mb-3 lg:text-xl">
              Welcome to Medico Healthcare
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight">
              Your Journey to Better Health Start Here
            </h1>
            <Button title="Discover More" styles="mt-5 md:mt-8 md:w-fit p-5" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
