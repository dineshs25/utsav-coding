import React, { useEffect, useState } from 'react'
import { API_KEY, BASE_URL } from '../../Hooks/useMovieApi'
import axios from 'axios'
import { MoviePosterComponet } from '../Carousel/MoviePosterComponet'
import { Link } from 'react-router-dom'

export const SearchPageComponent = ({ search }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        setTimeout(() => {
            let keyowrd = String(search).toLowerCase();
            apiCall(keyowrd)
        }, [1000])
    }, [search])


    const apiCall = async (keyword) => {
        const response = await axios.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&query=${keyword}`);
        const movies = response?.data?.results;
        console.log(movies)
        setMovies(movies)
    }

    return (
        <div className='search-page'>
            {movies?.length === 0 ? <p>No Movies Found</p> :
                <>
                    {movies?.map((movie, index) => (
                        <div className='card' key={index}>
                            <Link to={`/movie/${movie?.id}`}>
                                <MoviePosterComponet movie={movie} />
                            </Link>
                        </div>
                    ))}
                </>
            }
        </div>
    )
}
