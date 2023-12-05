import React from 'react'
import useMovieApi from '../../Hooks/useMovieApi';

export const MoviePageTopSection = ({ data }) => {
    const { getImageUrl } = useMovieApi();

    return (
        <div className='movie-page-bg'>
            <img src={getImageUrl(data?.Movie?.backdrop_path)} alt='banner' />
            <div className='movie-banner-sec-bottom'>
            </div>
            <div className='movie-brief'>
                <h2>{data?.Movie?.original_title}</h2>
                <p>{data?.Movie?.overview}</p>
                <div className='movie-banner-btn-parent'>
                    <button className='play-now-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 6.59479C5.75 4.93097 7.53383 3.87624 8.9917 4.67807L22.4557 12.0833C23.9668 12.9144 23.9668 15.0856 22.4557 15.9167L8.9917 23.3219C7.53383 24.1238 5.75 23.069 5.75 21.4052V6.59479Z" fill="white" />
                        </svg>Play Now</button>
                    <div className='movie-banner-side-icon-parent'>
                        <button className='movie-banner-side-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                <path d="M14.5 7V21M21.5 14L7.5 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className='movie-banner-side-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                <path d="M8.238 11.9584C9.17874 11.9584 10.0276 11.4382 10.6081 10.698C11.5101 9.54785 12.647 8.59067 13.9465 7.89862C14.789 7.44994 15.52 6.78337 15.8745 5.89712C16.1226 5.27699 16.25 4.61522 16.25 3.94732V3.20837C16.25 2.72512 16.6418 2.33337 17.125 2.33337C18.5747 2.33337 19.75 3.50863 19.75 4.95837C19.75 6.30194 19.4472 7.57478 18.9061 8.71236C18.5962 9.36376 19.0309 10.2084 19.7522 10.2084M19.7522 10.2084H23.399C24.5968 10.2084 25.6689 11.018 25.7957 12.209C25.8481 12.7016 25.875 13.2019 25.875 13.7084C25.875 17.0306 24.7178 20.0825 22.7845 22.4831C22.3323 23.0446 21.6332 23.3334 20.9123 23.3334H16.227C15.6627 23.3334 15.1021 23.2424 14.5668 23.064L10.9332 21.8528C10.3979 21.6743 9.83732 21.5834 9.27304 21.5834H7.38824M19.7522 10.2084H17.125M7.38824 21.5834C7.48485 21.822 7.58999 22.0564 7.70327 22.2859C7.93326 22.7521 7.61223 23.3334 7.09245 23.3334H6.03337C4.99654 23.3334 4.0349 22.729 3.73232 21.7373C3.33743 20.4431 3.125 19.0693 3.125 17.6459C3.125 15.8347 3.46894 14.1038 4.09507 12.515C4.45097 11.6119 5.36189 11.0834 6.33258 11.0834H7.5608C8.11138 11.0834 8.43019 11.7319 8.14435 12.2025C7.1802 13.7898 6.625 15.653 6.625 17.6459C6.625 19.0383 6.89604 20.3674 7.38824 21.5834Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className='movie-banner-side-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                <path d="M22.7997 6.57535C26.9002 10.6759 26.9002 17.3241 22.7997 21.4246M19.7064 9.66904C22.0984 12.061 22.0984 15.9391 19.7064 18.3311M8.375 9.62504L13.8813 4.11875C14.4325 3.56753 15.375 3.95793 15.375 4.73747V23.2626C15.375 24.0421 14.4325 24.4325 13.8813 23.8813L8.375 18.375H5.76056C4.73466 18.375 3.77356 17.7842 3.5011 16.7951C3.25595 15.9052 3.125 14.9679 3.125 14C3.125 13.0322 3.25595 12.0949 3.5011 11.205C3.77356 10.2159 4.73466 9.62504 5.76056 9.62504H8.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
