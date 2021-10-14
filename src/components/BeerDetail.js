import React from "react";
import './BeerDetail.css';

const BeerDetail = ({beer}) => {

    // const beerIngredients = function(){
    //     const beerIngredientList = [];
    //     for (const ingredient of beer.ingredients){
    //         beerIngredientList.push(ingredient.malt)
    //         beerIngredientList.push(ingredient.hops)
    //         beerIngredientList.push(ingredient.yeast)
    //     }
    //     return beerIngredientList;
    // }

    return(
        <div className="beer-detail">
            <h1>{beer.name}</h1>
            <h2>"{beer.tagline}"</h2>
            <button type="submit" id="fave" name="fave-beer" value="Favourite">Favourite Beer?</button>
            <h3>First Brewed: {beer.first_brewed}</h3>
            <h4>Abv: {beer.abv}</h4>
            {/* <p>Ingredients: {beerIngredients().join(", ")}</p> */}
            <p className="blocktext">{beer.description}</p>
            <img src={beer.image_url} alt="beer" width="75" height="270"/>
        </div>
    )
}


export default BeerDetail;