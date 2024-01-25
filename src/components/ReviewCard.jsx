import React from 'react';
import Image from 'next/image';

const ReviewCard = ({ review }) => {
  const starArray = Array.from({ length: review.rating });

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:gap-10 lg:px-16">
      <div className="relative flex justify-center md:w-1/2 md:max-w-[385px]">
        <Image
          src={review.user.image}
          alt={review.user.name}
          width={264}
          height={200}
          className="relative z-[3] w-full object-cover md:overflow-visible"
        />
        <div className="absolute bottom-0 h-[128px] w-full rounded-2.5xl bg-secondary"></div>
      </div>
      <div className="mt-6 md:w-1/2">
        <div className="inline-flex h-14 w-14 rounded-br-full bg-black  px-2 py-4">
          <Image src="/quotes-white.svg" width={28} height={25} />
        </div>
        <div className="mt-4 flex gap-1">
          {starArray.map((_, index) => (
            <Image key={index} src="/star.svg" width={28} height={25} />
          ))}
        </div>
        <h2 className="mb-6 mt-4 text-2xl font-bold md:text-[32px] md:leading-snug">
          “{review.title}”
        </h2>
        <div>
          <p className="text-xl font-medium">{review.user.name}</p>
          <p>{review.user.patient}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
