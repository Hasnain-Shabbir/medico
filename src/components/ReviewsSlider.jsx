'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ReviewCard } from '.';

const ReviewsSlider = ({ reviews }) => {
  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSlider;
