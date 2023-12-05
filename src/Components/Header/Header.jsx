import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar';
import Logo from '../../assets/Images/logo.svg';
import Bell from '../../assets/Images/bellIcon.svg';
import Eye from '../../assets/Images/Icon.svg';
import { Link } from 'react-router-dom';

export const Header = ({ search, setSearch }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
    }, []);

    const [open, setOpen] = useState(false);




    return (
        <>
            {!isMobile &&
                <div className='header'>
                    <Link to={'/'}>
                        <div className='logo'>
                            <img src={Logo} alt='logo' />
                        </div>
                    </Link>
                    <NavBar />
                    <div className='icons'>
                        <input type='text' className='search' onChange={(e) => setSearch(e.target.value)} />
                        <img src={Eye} alt='searchIcon' />
                        <img src={Bell} alt='bellIcon' />
                    </div>

                </div>
            }

            {isMobile &&
                <>
                    <div className='mobile-header'>
                        <Link to={'/'}>
                            <div className='logo'>
                                <img src={Logo} alt='logo' />
                            </div>
                        </Link>
                        <div className='nav-icon' onClick={() => setOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM11.25 17.25C11.25 16.8358 11.5858 16.5 12 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H12C11.5858 18 11.25 17.6642 11.25 17.25Z" fill="white" />
                            </svg>
                        </div>

                    </div>
                    <div>
                        {open &&
                            <><NavBar />
                                <button className='close-btn' onClick={() => setOpen(false)}>X</button>
                            </>
                        }
                    </div>
                </>}
        </>
    )
}
