import React from 'react'

export const SingleDetail = ({ name, detail }) => {
    return (
        <div className='single-detail'>
            <p className='single-name'>{name}</p>
            <p className='single-detail'>{detail}</p>
        </div>
    )
}
