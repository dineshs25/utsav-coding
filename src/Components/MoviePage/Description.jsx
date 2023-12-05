import React from 'react'

export const Description = ({ data }) => {
    return (
        <div className='description'>
            <h4>Description</h4>
            <p>{data?.Movie?.overview}</p>
        </div>
    )
}
