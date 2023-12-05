import React, { useEffect, useState } from 'react'
import useMovieApi, { API_KEY, BASE_URL } from '../../Hooks/useMovieApi';
import axios from 'axios';

export const GenresComponent = ({ id }) => {

    const [movies, setMovies] = useState([]);
    const { getImageUrl } = useMovieApi()

    useEffect(() => {
        const apiCall = async () => {
            const response = await axios.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${id}`);
            const movies = response?.data?.results.slice(0, 4);
            setMovies(movies)
        }
        apiCall()
    }, [id])


    return (
        <div className="swiper-image-parent">
            <div className='genre-four-poster'>
                {movies?.map((movie, index) => (
                    <div className='genre-poster' key={index}>
                        <img src={getImageUrl(movie?.poster_path)} alt='poster' />
                    </div>
                ))}
            </div>
            <div className="swiper-shadow"></div>
        </div>
    )
}
