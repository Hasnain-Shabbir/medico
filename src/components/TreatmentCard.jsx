import React from 'react';
import Image from 'next/image';

const TreatmentCard = ({ cardData }) => {
  return (
    <div className="relative mb-14">
      <div className="overflow-hidden rounded-xl lg:max-h-[200px] lg:max-w-[300px]">
        <Image
          src={cardData.image}
          width={200}
          height={200}
          className="w-full"
        />
      </div>
      <div className="absolute -bottom-12 left-7 z-[4] rounded-xl bg-primary-500 px-5 py-4 text-center text-white sm:px-8 sm:py-6">
        <span className="mb-5 text-sm font-bold sm:text-base">
          {cardData.description}
        </span>
        <h3 className="text-xl font-bold sm:text-2xl">{cardData.title}</h3>
      </div>
    </div>
  );
};

export default TreatmentCard;
