import React from 'react'
import { headerImages1, headerImages2, headerImages3, headerImages4 } from './BackgroundImages'

export const BackgroundBanner = () => {

    return (
        <div>
            <div className='header-background1'>
                {headerImages1?.map((image, index) => (
                    <div className='header-bg-image-div' key={index}>
                        <img src={image} alt='header-bg' />
                    </div>
                ))}
            </div>
            <div className='header-background2'>
                {headerImages2?.map((image, index) => (
                    <div className='header-bg-image-div' key={index}>
                        <img src={image} alt='header-bg' />
                    </div>
                ))}
            </div>
            <div className='header-background3'>
                {headerImages3?.map((image, index) => (
                    <div className='header-bg-image-div' key={index}>
                        <img src={image} alt='header-bg' />
                    </div>
                ))}
            </div>
            <div className='header-background4'>
                {headerImages4?.map((image, index) => (
                    <div className='header-bg-image-div' key={index}>
                        <img src={image} alt='header-bg' />
                    </div>
                ))}
            </div>
        </div>
    )
}
