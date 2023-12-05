import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";


export default function Carsoule({ data, sectionName }) {


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
    }, []);




    return (
        <div className="swiper-parent" id={`${sectionName}`} >
            <div>
                <h3 className="slider-title">{sectionName}</h3>
            </div>
            {
                !isMobile &&
                <DesktopCarousel sectionName={sectionName} data={data} />
            }

            {
                isMobile &&
                <MobileCarousel sectionName={sectionName} data={data} />
            }
        </div>
    );
}
