import React, { useEffect, useState } from 'react';
import ExploreSingle from '../ExploreSingle/ExploreSingle';
import './Explore.css';

const Explore = () => {
    const [explore, setExplore] = useState([]);
    useEffect(() => {
        fetch('https://mighty-ridge-44167.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setExplore(data));
    }, [])

    return (
        <div className="mt-5 container">
            <h1 className="text-success margin-top">SELECT YOUR FAVORITE HOME</h1>
                <h5 className="container mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae vel saepe at quia excepturi corporis natus ducimus deserunt magnam earum.</h5>
            <div className="service-container">
                {
                    explore.map(explore => <ExploreSingle
                        key={explore._id}
                        explore={explore}
                    ></ExploreSingle>)
                }
            </div>
        </div>
    );
};

export default Explore;