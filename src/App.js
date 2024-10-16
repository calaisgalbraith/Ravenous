import { useState, useEffect, useLayoutEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import BackToTop from './components/BackToTop/BackToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.js';
import Yelp from './utils/yelp.js'
import './App.css';

function App() {
  const [loading, setLoading] = useState(true); // loading screen
  const [containerStyling, setContainerStyling] = useState('ravenousContainer noResults') // show placeholder message if no results
  const [businesses, setBusinesses] = useState([]); // list of businesses

  // Call Yelp API w/ search query & update list of businesses
  const searchYelp = async (query, location, sort) => {
    setLoading(true) //show loader
    const businessesResults = await Yelp(query, location, sort);
    setBusinesses(businessesResults);
    setLoading(false) //hide loader
    if (businessesResults.length === 0) { // if no results, update styling
      setContainerStyling('ravenousContainer noResults');
    } else {
      setContainerStyling('ravenousContainer');
    }
  }

  const [term, setTerm] = useState('')
  const handleTermChange = ({target}) => { // term(s) to search by
      setTerm(target.value)
  }

  const [location, setLocation] = useState('us') // location option to search by
  const handleLocationChange = ({target}) => {
      setLocation(target.value)
  }

  const [sortOption, setSortOption] = useState('best_match') // sort option to search by
  const handleSortOptionChange = (sortOptionUpdate) => { // update sortby value when selected value changes
    setSortOption(sortOptionUpdate)
  }

  useEffect(() => { // on load, do default search
    searchYelp("", "US", "best_match")
  }, []);

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
        <h1>Ravenous</h1>
        <SearchBar
          searchYelp={searchYelp}
          sortOption={sortOption}
          handleSortOptionChange={handleSortOptionChange}
          location={location}
          handleLocationChange={handleLocationChange}
          term={term}
          handleTermChange={handleTermChange}
        />
      </div>
      <BusinessList businesses={businesses}/>
      <BackToTop />
    </div>
  );
}

export default App;
