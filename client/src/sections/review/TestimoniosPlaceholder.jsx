import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import reviewsData from '../../data/reviews.json';

function TestimoniosPlaceholder() {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-[#0A1113] px-6 py-20 sm:px-10 lg:px-16 border-t border-b border-transparent">
      <div className="mx-auto max-w-6xl text-center relative z-20">
        <h2 className="text-3xl md:text-4xl font-serif text-[#F4F2EA] mb-24 tracking-wide uppercase">
          Nuestros Testimonios
        </h2>

        {reviewsData && reviewsData.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="px-4 [&_.swiper-wrapper]:!items-stretch [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!mt-14 [&_.swiper-pagination-bullet-active]:!bg-[#38E0C8] [&_.swiper-pagination-bullet]:!bg-[#F4F2EA]/40"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id} className="!h-auto flex pt-16">
                <div className="bg-[#F4F2EA] w-full min-h-[420px] md:min-h-[450px] flex flex-col rounded-2xl p-8 relative items-center text-center shadow-lg">
                  
                  <div className="absolute -top-12 w-[100px] h-[100px] rounded-full border-4 border-[#F4F2EA] overflow-hidden bg-[#0A1113] flex items-center justify-center shadow-md">
                    <img
                      src={review.profile_photo_url}
                      alt={`Foto de ${review.author_name}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex gap-1 mt-10 mb-4 text-[#C19B6C]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  <div className="flex-grow flex items-center">
                    <p className="text-sm md:text-base font-medium italic text-[#0A1113] line-clamp-5 leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-bold text-lg text-[#0A1113]">
                      {review.author_name}
                    </h4>
                    <p className="text-sm text-gray-500 font-medium capitalize mt-1">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-[#F4F2EA]/30 bg-[#0A1113] p-8 shadow-sm text-center">
            <p className="text-[#F4F2EA]">
              Cargando testimonios de la tribu...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimoniosPlaceholder;