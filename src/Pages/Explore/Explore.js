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
        <div className="margin-from-top">
            <h1 className="text-success margin-top">SELECT YOUR FAVORITE HOME</h1>
                <h5 className="container mb-4">
                With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.</h5>
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