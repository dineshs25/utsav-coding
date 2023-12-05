import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { DescType1, DescType3, DescType4 } from './DescTypes';
import { Link } from 'react-router-dom';
import { MoviePosterComponet } from './MoviePosterComponet';
import { GenresComponent } from './GenresComponent';

export default function DesktopCarousel({ sectionName, data }) {
    const [setSwiperRef] = useState(null);

    const [slides, setSlides] = useState(5)


    useEffect(() => {
        if (sectionName === "Top Rated") {
            setSlides(4)
        }
    }, [sectionName])


    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={slides}
                centeredSlides={false}
                spaceBetween={20}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data[sectionName].map((movie, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/movie/${movie?.id}`}>
                            {sectionName === "Our Genres" ? <GenresComponent id={movie?.id} /> : <MoviePosterComponet movie={movie} />}
                            {sectionName === "Our Genres" && <DescType1 name={movie?.name} />}
                            {sectionName === "Upcoming Bangers" && <DescType3 date={movie?.release_date} />}
                            {sectionName === "Popular" && <DescType3 popularity={movie?.popularity} />}
                            {sectionName === "Top Rated" && <DescType4 voteCount={movie?.vote_count} voteAverage={movie?.vote_average} />}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
}
