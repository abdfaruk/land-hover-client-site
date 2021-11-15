import React, { useEffect, useState } from 'react';
import ExploreSingle from '../../ExploreSingle/ExploreSingle';

const HomeExplore = () => {
    const [explore, setExplore] = useState([]);
    useEffect(() => {
        fetch('https://mighty-ridge-44167.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const displayData = data.slice(0,6)
                setExplore(displayData)
            });
    }, [])
    return (
        <div className="margin-from-top">
            <h1 className="text-success margin-top">SELECT YOUR FAVORITE HOME</h1>
            <h3 className="container mb-4">
                With over 1 million+ homes for sale available on the website, We can match you with a house you will want to call home.
                With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.</h3>
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