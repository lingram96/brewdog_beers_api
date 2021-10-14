import './App.css';
import React from 'react';
import BeerContainer from './containers/BeerContainer';
// import BeerFavourites from './components/BeerFavourites';

function App() {
  return (
    <div className="App">
    <img src="brewdoglogo.png" width="175" height="200"/>
   <BeerContainer />
   {/* <BeerFavourites /> */}
  </div>
  );
}

export default App;
