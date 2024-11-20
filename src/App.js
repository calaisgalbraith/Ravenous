import { useState, useEffect, useLayoutEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import BackToTop from './components/BackToTop/BackToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.js';
import ViewMore from './components/ViewMore/ViewMore.js';
import Yelp from './utils/yelp.js'
import './App.css';

function App() {
  const [loading, setLoading] = useState(true); // loading screen
  const [containerStyling, setContainerStyling] = useState('ravenousContainer noResults') // show placeholder message if no results
  const [businesses, setBusinesses] = useState([]); // list of businesses
  

  // Track values for View More Btn
  const [buttonDisplay, setButtonDisplay] = useState('btn hideButton'); // Show/Hide View More btn
  const [currentQuery, setCurrentQuery] = useState(''); // track existing query
  const [currentLocation, setCurrentLocation] = useState('US'); // track existing query
  const [currentSort, setCurrentSort] = useState('best_match'); // track existing query
  const [currentOffset, setCurrentOffset] = useState(20); // track existing query

  // Call Yelp API w/ search query & update list of businesses
  const searchYelp = async (query = currentQuery, location = currentLocation, sort = currentSort, offset = currentOffset) => {
    setLoading(true) //show loader
    const businessesResults = await Yelp(query, location, sort, offset); // get restaurants

    if (offset === 0) { // if new search (search bar submit or first load)
      setCurrentQuery(query) // update current query
      setCurrentLocation(location) // update current location
      setCurrentSort(sort) // update current sort
      setCurrentOffset(20) // reset offset to 20
      setBusinesses(businessesResults); // set business results
    } else { // view more btn clicked
      setCurrentOffset(prevState => prevState + 20); // increase offset
      
      setBusinesses([ // push new results to existing businesses 
        ...businesses,
        ...businessesResults
      ]);
    }
    
    setLoading(false) //hide loader
    if (businessesResults !== undefined) { // check cors enabled (results not undefined)
      if (businessesResults.length === 0) { // if no results, update styling
        setContainerStyling('ravenousContainer noResults');
        setButtonDisplay('btn hideButton') // hide View More btn
      } else {
        setContainerStyling('ravenousContainer');
        setButtonDisplay('btn') // hide View More btn
      }
    }
  }

  useEffect(() => { // on load, do default search
    firstCall()
  }, []);

  function firstCall () { // function for first API call on load (added bc yelp call in useEffect breaks neltify)
    searchYelp(currentQuery, currentLocation, currentSort, 0) // 0 is offset
  }

  useLayoutEffect(() => { // while loading, disable scroll
    if (loading) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
    if (!loading) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [loading]);
  
  return (
    <div className={containerStyling}>
       <div>
        {loading ? <LoadingScreen /> : '' }
        <h1 className='appHeader'>Ravenous</h1>
        <SearchBar searchYelp={searchYelp} />
      </div>
      <BusinessList businesses={businesses}/>
      <ViewMore searchYelp={searchYelp} buttonDisplay={buttonDisplay}/>
      <BackToTop />
    </div>
  );
}

export default App;
