import React, { useState } from 'react'
import { Header } from '../Components/Header/Header'
import { BackgroundBanner } from '../Components/Banners/BackgroundBanner'
import { UtsavSummary } from '../Components/UtsavSummary'
import { Footer } from '../Components/Footer/Footer'
import useMovieApi from '../Hooks/useMovieApi'
import { SearchPageComponent } from '../Components/Search/SearchPageComponent'
import PaginationComponent from '../Components/PaginationComponent'

export const HomePage = () => {


    const [search, setSearch] = useState('')
    const endpoints = [
        {
            title: 'Our Genres',
            endpoint: 'genre/movie/list'
        },
        {
            title: 'Upcoming Bangers',
            endpoint: 'movie/upcoming'
        },
        {
            title: 'Latest on Utsav',
            endpoint: 'movie/now_playing'
        },
        {
            title: 'Top Rated',
            endpoint: 'movie/top_rated'
        },
        {
            title: 'Popular',
            endpoint: 'movie/popular'
        },
    ];



    const { data, loading, error } = useMovieApi(endpoints);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            {!loading &&
                <>
                    <Header search={search} setSearch={setSearch} />
                    {search && <SearchPageComponent search={search} />}

                    {!search &&
                        <>
                            <div className='banner-sec' id='banner'>

                                <div className='banner-sec-top'>
                                </div>
                                <div className='banner-sec-bottom'>
                                </div>
                                <BackgroundBanner />
                            </div>
                            <UtsavSummary />
                            <div className='main-sec'>
                                <PaginationComponent data={data} />
                            </div>
                        </>
                    }
                    <Footer />


                </>
            }
        </>
    )
}
