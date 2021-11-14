import React, { useEffect, useState } from 'react';
import ExploreSingle from '../../ExploreSingle/ExploreSingle';

const HomeExplore = () => {
    const [explore, setExplore] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const displayData = data.slice(0,6)
                setExplore(displayData)
            });
    }, [])
    return (
        <div className="mt-5 container">
            <h1 className="text-success margin-top">SELECT YOUR FAVORITE HOME</h1>
                <h5 className="container mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae vel saepe at quia excepturi corporis natus ducimus deserunt magnam earum.</h5>
            <div className="service-container">
                {
                    explore.map(explore => <ExploreSingle
                        key={explore.id}
                        explore={explore}
                    ></ExploreSingle>)
                }
            </div>
        </div>
    );
};

export default HomeExplore;