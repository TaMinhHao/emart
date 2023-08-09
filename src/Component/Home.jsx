import React from "react";
import Products from "./Products";
import  bg from '../assets/2-shooping.jpg';

const Home = () => {
    return (
        <div className="hero">
            <div class="card text-bg-dark border-0">
                <img src={bg} class="card-img" alt="..." height="550px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title display-3">NEW SEASON ARRIVALS</h5>
                        <p class="card-text lead fs-2" >CHECK OUT ALL THE TRENDS</p>

                    </div>

                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home;