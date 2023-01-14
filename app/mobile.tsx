import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Card from "./card";

export default function Mobile({ results }: { results: [Pokemon] }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        slidesPerView={"auto"}
        spaceBetween={0}
        // centeredSlides={true}
        className='w-5/6'
      >
        {results?.map((pokemon: Pokemon, idx) => (
          <SwiperSlide key={idx} className='w-3/4'>
            <Card pokemon={pokemon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
