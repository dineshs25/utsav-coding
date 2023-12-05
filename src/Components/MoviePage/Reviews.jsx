import React, { useState } from 'react'
import Ratings from '../Carousel/Rating'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import useMovieApi from '../../Hooks/useMovieApi';

export const Reviews = ({ reviews }) => {

    const [setSwiperRef] = useState(null);
    const { getImageUrl } = useMovieApi();

    return (
        <div className='reviews-parent'>
            <div className='review-title'>
                <p>Reviews</p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.5V22.5M22.5 15L7.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Add Your Review
                </button>
            </div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={1}
                centeredSlides={false}
                spaceBetween={20}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {reviews?.length === 0 ? <p>No Reviews to show</p> :
                    <>
                        {reviews?.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className='review'>
                                    <div className='review-top'>
                                        <div className='review-person'>
                                            {review?.author_details?.avatar_path && <div className='review-avatar'>
                                                <img src={getImageUrl(review?.author_details?.avatar_path)} alt='avatar' />
                                            </div>}
                                            <div className='review-person-details'>
                                                <h4>{review?.author
                                                }</h4>
                                            </div>
                                        </div>
                                        {review?.author_details?.rating && <div className='ratings'>
                                            <Ratings rating={review?.author_details?.rating} />{review?.author_details?.rating}
                                        </div>}
                                    </div>
                                    <p className='review-cont'>{review?.content.substring(0, 200)}...</p>
                                </div>
                            </SwiperSlide>
                        ))}

                    </>}

            </Swiper>

        </div>
    )
}
