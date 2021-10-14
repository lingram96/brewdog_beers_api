import React, { useState, useEffect } from "react";
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import BeerSelector from '../components/BeerSelector';
import './BeerContainer.css';
import '../components/BeerSelector.css';
import '../components/BeerDetail.css';

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
      getBeers();
    }, [])

    const getBeers = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    const onBeerSelected = function(beer){
        setSelectedBeer(beer);
    }

    return (
        <div className="main-container">
            <BeerSelector beers={beers} onBeerSelected={onBeerSelected}/>
            {selectedBeer ? <BeerDetail beer={selectedBeer}/>: null}
        </div>
    )
}

export default BeerContainer;