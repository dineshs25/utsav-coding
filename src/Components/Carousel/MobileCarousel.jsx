import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import { DescType1, DescType3, DescType4 } from './DescTypes';
import { Link } from 'react-router-dom';
import { GenresComponent } from './GenresComponent';
import { MoviePosterComponet } from './MoviePosterComponet';

export default function MobileCarousel({ sectionName, data }) {

    return (
        <>
            <Swiper
                slidesPerView={2}
                centeredSlides={false}
                spaceBetween={10}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation]}
                className="mySwiper"
            >
                {data[sectionName].map((movie, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/movie/${movie?.id}`}>
                            {sectionName === "Our Genres" ? <GenresComponent id={movie?.id} /> : <MoviePosterComponet movie={movie} />}
                            {sectionName === "Our Genres" && <DescType1 name={movie?.name} />}                            {sectionName === "Upcoming Bangers" && <DescType3 date={movie?.release_date} />}
                            {sectionName === "Popular" && <DescType3 popularity={movie?.popularity} />}
                            {sectionName === "Top Rated" && <DescType4 voteCount={movie?.vote_count} voteAverage={movie?.vote_average} />}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
