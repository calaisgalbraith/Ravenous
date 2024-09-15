import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import BackToTop from './components/BackToTop/BackToTop';
import Yelp from './utils/yelp.js'
import './App.css';

function App() {
  const [containerStyling, setContainerStyling] = useState('ravenousContainer noResults')
  const [businesses, setBusinesses] = useState([]);
  const searchYelp = async (query, location, sort) => {
    const businessesResults = await Yelp(query, location, sort);
    setBusinesses(businessesResults);
    if (businessesResults.length === 0) { // if no results, update styling
      setContainerStyling('ravenousContainer noResults');
    } else {
      setContainerStyling('ravenousContainer');
    }
  }

  useEffect(() => { // on load, do default search
    searchYelp("", "US", "best_match")
  }, []);

  return (
    <div className={containerStyling}>
      <div>
        <h1>Ravenous</h1>
        <SearchBar searchYelp={searchYelp}/>
      </div>
      <BusinessList businesses={businesses}/>
      <BackToTop />
    </div>
  );
}

export default App;
