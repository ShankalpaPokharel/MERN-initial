import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as star } from "@fortawesome/free-regular-svg-icons";

const SingleProduct = (product) => {
    const el = product.product;
    // console.log("el is ", el)
    const ratingStar = Math.floor(el.rating);
    const nonRatingStar = 5 - ratingStar;

    return (
        <>
            <div className="p_image">
                <img src={el.thumbnail} alt="" />
            </div>
            <p>{el.title}</p>
            <p>${el.price}</p>
            <div className="star-div">
                {[...Array(ratingStar)].map((_, index) => (
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                ))}
                {[...Array(nonRatingStar)].map((_, index) => (
                        <FontAwesomeIcon icon={star} style={{color: "#FFD43B",}} />
                ))}
                 ({el.rating})

                
            </div>
        </>
    );
};

export default SingleProduct;
