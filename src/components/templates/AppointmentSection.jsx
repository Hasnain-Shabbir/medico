import React from 'react';
import { AppointmentForm, Container } from '..';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const AppointmentSection = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:my-auto md:w-1/2 lg:pr-16">
            <p className="mb-1 font-bold uppercase text-primary-500">
              APPOINTMENT
            </p>
            <h2 className="mb-4 text-3xl font-bold lg:mb-6 lg:text-[40px] lg:leading-snug">
              Get in touch to book your first appointment
            </h2>
            <p className="mb-10 text-lg md:text-xl lg:mb-14">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500">
                  <MdOutlineLocalPostOffice color="white" />
                </span>
                <p className="font-font-medium ml-3 text-xl">(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500">
                  <FaPhoneAlt color="white" />
                </span>
                <p className="font-font-medium ml-3 text-xl">
                  medico@health.care
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 md:w-1/2">
            <AppointmentForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppointmentSection;
