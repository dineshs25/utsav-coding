import React, { useState } from 'react'
import { Header } from '../Components/Header/Header'
import { Link, useParams } from 'react-router-dom'
import useMovieApi from '../Hooks/useMovieApi';
import { MoviePageTopSection } from '../Components/MoviePage/MoviePageTopSection';
import { Footer } from '../Components/Footer/Footer';
import { Description } from '../Components/MoviePage/Description';
import { SingleDetail } from '../Components/MoviePage/SingleDetail';
import { MultipleDetail } from '../Components/MoviePage/MultipleDetail';
import { Reviews } from '../Components/MoviePage/Reviews';
import { SearchPageComponent } from '../Components/Search/SearchPageComponent';

export const MovieDetailsPage = () => {

    const { id } = useParams();
    const [search, setSearch] = useState('')

    const endpoints = [{
        title: 'Movie',
        endpoint: `movie/${id}`
    }, {
        title: 'reviews',
        endpoint: `movie/${id}/reviews`
    }]


    const { data, loading, error } = useMovieApi(endpoints);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }


    const singleData = [
        {
            name: "Relase Date",
            detail: data?.Movie?.release_date
        },
        {
            name: "Popularity",
            detail: data?.Movie?.popularity
        },
        {
            name: "Vote Count",
            detail: data?.Movie?.vote_count
        },
        {
            name: "Vote Average",
            detail: data?.Movie?.vote_average
        },
        {
            name: "Budget",
            detail: data?.Movie?.budget
        },
        {
            name: "Revenue",
            detail: data?.Movie?.revenue
        },

    ]

    return (
        <div className='movie-page'>
            <Header search={search} setSearch={setSearch} />
            {search ?
                <SearchPageComponent search={search} /> :
                <>
                    <MoviePageTopSection data={data} />
                    <div className='movie-page-mid-sec'>
                        <div className='movie-page-mid-child-1'>
                            <Description data={data} />
                            <Reviews reviews={data?.reviews} />
                        </div>
                        <div className='movie-page-mid-child-2'>
                            <div className='single-detail'>
                                <Link to={data?.Movie?.homepage} className='single-name'>Home Page</Link>
                            </div>
                            {singleData?.map((single, index) => (
                                <SingleDetail key={index} name={single?.name} detail={single?.detail} />
                            ))}

                            <div className='multiple-parent'>
                                <h4 className='single-name'>Languages</h4>
                                <div className='multiple-flex'>
                                    {data?.Movie?.spoken_languages?.map((name, index) => (
                                        <MultipleDetail name={name?.name} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className='multiple-parent'>
                                <h4 className='single-name'>Geners</h4>
                                <div className='multiple-flex'>
                                    {data?.Movie?.genres?.map((name, index) => (
                                        <MultipleDetail name={name?.name} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className='multiple-parent'>
                                <h4 className='single-name'>Countries</h4>
                                <div className='multiple-flex'>
                                    {data?.Movie?.production_countries?.map((name, index) => (
                                        <MultipleDetail name={name?.name} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            <Footer />

        </div>
    )
}
