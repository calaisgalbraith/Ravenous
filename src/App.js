import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import BackToTop from './components/BackToTop/BackToTop';
import Yelp from './utils/yelp.js'
import './App.css';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const searchYelp = async (query, location, sort) => {
    console.log('search yelp')
    const businessesResults = await Yelp(query, location, sort);
    setBusinesses(businessesResults);
    // if (!suggestions) {
    //   setShowMessage(true);
    // }
  }

  useEffect(() => { // on load, do default search
    searchYelp("", "US", "best_match")
  }, []);

  return (
    <div className='ravenousContainer'>
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
