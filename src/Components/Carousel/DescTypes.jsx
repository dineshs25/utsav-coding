import React from 'react'
import Ratings from './Rating'



export const DescType1 = ({ name }) => {
    return (
        <div className='desc-div'>
            <p>{name}</p>
            <div className='arr-img'>
                <img src='Images/rightArrow.svg' alt='rightArrow' />
            </div>
        </div>
    )
}


export const DescType2 = () => {
    return (
        <div className='desc-div desc-type2'>
            <div className='duration-div'>
                <div className='clock-icon'>
                    <img src='Images/clock.svg' alt='rightArrow' />
                </div>
                <p>1h 30min</p>
            </div>
            <div className='duration-div'>
                <div className='clock-icon'>
                    <img src='Images/eye.svg' alt='rightArrow' />
                </div>
                <p>1.9K</p>
            </div>
        </div>
    )
}


export const DescType3 = ({ date, popularity }) => {

    let inputDate = date;
    const formattedDate = new Date(inputDate).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })


    return (
        <div className='desc-div desc-type2'>
            <div className='duration-div desc-type3' >
                {popularity ? <p className='release-p'>{popularity}</p> : <p className='release-p'>Releasing on {formattedDate}</p>}
            </div>
        </div>
    )
}


export const DescType4 = ({ voteCount, voteAverage }) => {
    return (
        <div className='desc-div desc-type2'>
            <div className='duration-div'>
                <div className='clock-icon'>
                    <img src='Images/clock.svg' alt='rightArrow' />
                </div>
                <p>{voteCount}</p>
            </div>
            <div className='duration-div'>
                <div className=''>
                    <Ratings rating={4} />
                </div>
                <p>{voteAverage}</p>
            </div>
        </div>
    )
}
