import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ cardData }) => {
  return (
    <div className="relative flex flex-col gap-5 overflow-hidden rounded-xl bg-white px-10 py-8 pb-14 md:flex-row md:gap-10">
      <div>
        <Image
          src={cardData.image}
          width={200}
          height={100}
          className="w-12 md:w-20 lg:w-36"
        />
      </div>
      <div>
        <h3 className="mb-1 text-2xl font-bold md:mb-3 md:text-3xl lg:mb-6 lg:leading-tight">
          {cardData.title}
        </h3>
        <p className="text-base font-medium md:pr-14 md:text-lg">
          {cardData.description}
        </p>
      </div>
      <span className="bg-c-gray-100 group absolute bottom-0 right-0 flex h-14 w-20 cursor-pointer items-center justify-center transition-all hover:opacity-80">
        <Link href={cardData.path}>
          <Image
            src="/arrow-right.svg"
            width={24}
            height={24}
            className="transition-all group-hover:translate-x-1"
          />
        </Link>
      </span>
    </div>
  );
};

export default ServiceCard;
