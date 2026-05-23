import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import reviewsData from '../../data/reviews.json';
import { useI18n } from '../../app/providers/i18nContext.js';

const GoogleLogo = () => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
    <path fill="#EA4335" d="M12 5.04c1.65 0 3.13.57 4.3 1.69l3.21-3.21C17.55 1.76 14.97 1 12 1 7.42 1 3.5 3.63 1.57 7.46l3.82 2.96C6.3 7.39 8.94 5.04 12 5.04z"/>
    <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.43h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.97 3.39-4.88 3.39-8.48z"/>
    <path fill="#FBBC05" d="M5.39 14.5A7.17 7.17 0 0 1 5 12c0-.87.15-1.72.4-2.52L1.57 6.52A11.94 11.94 0 0 0 0 12c0 2.05.52 4 1.44 5.72l3.95-3.22z"/>
    <path fill="#34A853" d="M12 23c3.24 0 5.97-1.08 7.96-2.92l-3.66-2.84c-1.11.74-2.53 1.19-4.3 1.19-3.06 0-5.7-2.35-6.63-5.38L1.44 16.28C3.5 20.12 7.42 23 12 23z"/>
  </svg>
);

const TripAdvisorLogo = () => (
  <svg className="w-6 h-6 text-[#00AFEF] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.73 13.91c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14zm-9.46 0c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
  </svg>
);

function TestimoniosPlaceholder() {
  const { t } = useI18n();

  return (
    <section className="relative z-10 w-full overflow-hidden bg-[#0A1113] px-6 py-24 sm:px-10 lg:px-16 border-t border-b border-transparent">
      
      <div className="mx-auto max-w-6xl text-center relative z-20">
        
        {/* CABECERA PRINCIPAL */}
        <h2 className="text-3xl md:text-5xl font-serif text-[#F4F2EA] mb-3 tracking-widest uppercase">
          {t('reviews.trust.title')}
        </h2>
        
        <p className="text-[#F4F2EA]/40 text-xs md:text-sm font-semibold tracking-wider uppercase mb-16 max-w-xl mx-auto">
          {t('reviews.trust.subtitle')}
        </p>

        {/* CONTENEDOR DE BLOQUES SUELTOS CON LÍNEAS DIVISIONALES */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 md:gap-0 mb-24 max-w-5xl mx-auto">
          
          {/* BLOQUE CLICKEABLE: CERTIFICACIÓN IKO */}
          <a 
            href="https://www.ikointl.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-5 group text-left md:px-6 py-4 rounded-xl hover:bg-[#F4F2EA]/[0.03] transition-all duration-300"
          >
            <div className="bg-[#F4F2EA]/5 p-3 rounded-xl border border-[#F4F2EA]/10 shadow-inner group-hover:border-[#38E0C8]/30 transition-colors shrink-0 text-[#38E0C8] filter drop-shadow-[0_0_8px_rgba(56,224,200,0.2)]">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#38E0C8] font-bold text-xs tracking-widest uppercase flex items-center gap-1.5">
                {t('reviews.trust.ikoTitle')} <ExternalLink size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
              </h3>
              <p className="text-[#F4F2EA]/70 text-xs mt-1.5 font-medium leading-relaxed">
                {t('reviews.trust.ikoDescPart1')}<span className="text-[#F4F2EA] font-semibold">{t('reviews.trust.ikoDescBold')}</span>{t('reviews.trust.ikoDescPart2')}
              </p>
            </div>
          </a>

          {/* DIVISOR 1: Línea idéntica a la inferior pero en vertical */}
          <div className="h-px w-full bg-[#F4F2EA]/10 md:h-16 md:w-px mx-auto" />

          {/* BLOQUE: GOOGLE REVIEWS */}
          <a 
            href="https://www.google.com/maps/place/Mancora+Kite+Club+-+Escuela+kitesurf+y+wingfoil/@-4.1020847,-81.0556632,17z/data=!4m8!3m7!1s0x903691315a6adf53:0x11242dabd794a228!8m2!3d-4.1020847!4d-81.0530883!9m1!1b1!16s%2Fg%2F11ckxxbb0n?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-5 group text-left md:px-8 py-4 rounded-xl hover:bg-[#F4F2EA]/[0.03] transition-all duration-300"
          >
            <div className="bg-[#F4F2EA]/5 p-3 rounded-xl border border-[#F4F2EA]/10 shadow-inner group-hover:border-[#38E0C8]/30 transition-colors shrink-0">
              <GoogleLogo />
            </div>
            <div>
              <div className="flex gap-0.5 text-[#C19B6C]">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" stroke="none" />)}
              </div>
              <p className="text-[#F4F2EA] text-sm font-bold mt-1.5 group-hover:text-[#38E0C8] transition-colors flex items-center gap-1.5 duration-300">
                {t('reviews.trust.googleTitle')} <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 group-hover:text-[#38E0C8] transition-all" />
              </p>
              <p className="text-[#F4F2EA]/40 text-xs mt-0.5 font-medium">{t('reviews.trust.googleDesc')}</p>
            </div>
          </a>

          {/* DIVISOR 2: Línea idéntica a la inferior pero en vertical */}
          <div className="h-px w-full bg-[#F4F2EA]/10 md:h-16 md:w-px mx-auto" />

          {/* BLOQUE: TRIPADVISOR */}
          <a 
            href="https://www.tripadvisor.com.pe/Attraction_Review-g635976-d6664378-Reviews-Mancora_Kite_Club-Mancora_Piura_Region.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-5 group text-left md:px-8 py-4 rounded-xl hover:bg-[#F4F2EA]/[0.03] transition-all duration-300"
          >
            <div className="bg-[#F4F2EA]/5 p-3 rounded-xl border border-[#F4F2EA]/10 shadow-inner group-hover:border-[#38E0C8]/30 transition-colors shrink-0">
              <TripAdvisorLogo />
            </div>
            <div>
              <div className="flex gap-0.5 text-[#00AFEF]">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" stroke="none" />)}
              </div>
              <p className="text-[#F4F2EA] text-sm font-bold mt-1.5 group-hover:text-[#38E0C8] transition-colors flex items-center gap-1.5 duration-300">
                5.0 TripAdvisor <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 group-hover:text-[#38E0C8] transition-all" />
              </p>
              <p className="text-[#F4F2EA]/40 text-xs mt-0.5 font-medium">{t('reviews.trust.tripAdvisorDesc')}</p>
            </div>
          </a>

        </div>

        {/* LÍNEA DE DIVISIÓN DE LA SECCIÓN (IGUAL A LOS DIVISORES VERTICALES) */}
        <div className="w-full h-px bg-[#F4F2EA]/10 mb-20" />

        {/* CARRUSEL DE TESTIMONIOS */}
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
            className="px-4 [&_.swiper-wrapper]:!items-stretch [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!mt-16 [&_.swiper-pagination-bullet-active]:!bg-[#38E0C8] [&_.swiper-pagination-bullet]:!bg-[#F4F2EA]/40"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id} className="!h-auto flex pt-16">
                <div className="bg-[#F4F2EA] w-full min-h-[420px] md:min-h-[450px] flex flex-col rounded-2xl p-8 relative items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1">
                  
                  <div className="absolute top-6 right-6 opacity-[0.25]">
                    {review.platform === 'google' ? (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.16 1 1.22 5.93 1.22 12s4.94 11 11.02 11c6.35 0 10.56-4.453 10.56-10.75 0-.725-.078-1.28-.172-1.965H12.24z"/></svg>
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.73 13.91c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14zm-9.46 0c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/></svg>
                    )}
                  </div>

                  <div className="absolute -top-12 w-[100px] h-[100px] rounded-full border-4 border-[#F4F2EA] overflow-hidden bg-[#0A1113] flex items-center justify-center shadow-md">
                    <img
                      src={review.profile_photo_url}
                      alt={`${t('reviews.trust.photoAlt')} ${review.author_name}`}
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
                      "{t(`reviews.items.${review.id}.text`)}"
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-bold text-lg text-[#0A1113]">
                      {review.author_name}
                    </h4>
                    <p className="text-sm text-gray-500 font-medium capitalize mt-1">
                      {t(`reviews.items.${review.id}.relative_time_description`)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-[#F4F2EA]/30 bg-[#0A1113] p-8 shadow-sm text-center">
            <p className="text-[#F4F2EA]">{t('reviews.trust.loading')}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimoniosPlaceholder;
