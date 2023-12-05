import React from "react";
import FullStar from "../../assets/Images/star.svg"

const Ratings = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
        stars.push(
            <img src={FullStar} alt="rating" className="rating" key={i} />
        );
    }
    return <div className="rating-flex"> {stars}</div>;
};

export default Ratings;