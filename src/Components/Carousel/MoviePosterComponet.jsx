import React from 'react'
import useMovieApi from '../../Hooks/useMovieApi'

export const MoviePosterComponet = ({ movie }) => {
    const { getImageUrl } = useMovieApi()
    return (
        <div className="swiper-image-parent">
            <img src={getImageUrl(movie?.poster_path)} alt="movies" />
            <div className="swiper-shadow"></div>
        </div>
    )
}
