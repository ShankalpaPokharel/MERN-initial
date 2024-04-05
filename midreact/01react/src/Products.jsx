import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import featuredProducts from "./featuredProducts";

function Products() {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((response) => {
                setResponse(response.data.products);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log("Response", response, typeof response);

    return (
        <>
            <h1>Featrued Products</h1>
            <div className="feature-product">
              {
                featuredProducts.map((el)=>(
                  <div className="productItem" key={el.id}>
                        <SingleProduct product={el} />
                    </div>
                ))
              }
              </div>
            <h1>Our Products</h1>

            <div className="product">
                {response.map((el) => (
                    <div className="productItem" key={el.id}>
                        <SingleProduct product={el} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
