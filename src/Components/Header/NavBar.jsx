import React from 'react'
import { Link } from 'react-scroll'

export const NavBar = () => {

    const navList = [
        {
            title: 'Home',
            url: 'banner'
        },
        {
            title: 'Upcoming',
            url: 'Upcoming Bangers'
        },
        {
            title: 'Latest',
            url: 'Latest on Utsav'
        },
        {
            title: 'Popular',
            url: 'Popular'
        },
        {
            title: 'Top Reated',
            url: 'Top Rated'
        }
    ]

    return (
        <nav>
            {navList?.map((item, index) => (
                <li key={index}>
                    <Link to={item?.url} spy={true}
                        smooth={true}
                        offset={-10}
                        duration={800} >{item?.title}</Link>
                </li>
            ))}
        </nav>
    )
}
