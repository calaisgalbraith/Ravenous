import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import BackToTop from './components/BackToTop/BackToTop';

const businesses = [
  {
    image: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'Sugar & Spice Thai Restaurant', 
    address: '1933 Massachusetts Ave',  
    city: 'Cambridge',  
    state: 'MA',  
    zipcode: '02140',  
    category: 'Thai',  
    rating: 4.5,  
    reviewCount: 90
  },
  {
    image: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'AA & Spice Thai Restaurant', 
    address: '1933 Massachusetts Ave',  
    city: 'Cambridge',  
    state: 'MA',  
    zipcode: '02140',  
    category: 'Thai',  
    rating: 4.5,  
    reviewCount: 90
  },
  {
    image: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'AA & Spice Thai Restaurant', 
    address: '1933 Massachusetts Ave',  
    city: 'Cambridge',  
    state: 'MA',  
    zipcode: '02140',  
    category: 'Thai',  
    rating: 4.5,  
    reviewCount: 90
  },
  {
    image: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'AA & Spice Thai Restaurant', 
    address: '1933 Massachusetts Ave',  
    city: 'Cambridge',  
    state: 'MA',  
    zipcode: '02140',  
    category: 'Thai',  
    rating: 4.5,  
    reviewCount: 90
  },
  {
    image: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'AA & Spice Thai Restaurant', 
    address: '1933 m Ave',  
    city: 'Cambridge',  
    state: 'MA',  
    zipcode: '02140',  
    category: 'Thai',  
    rating: 4.5,  
    reviewCount: 90
  },
  {
    image: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'AA & Spice Thai Restaurant', 
    address: '1933 Massachusetts Ave',  
    city: 'Cambridge',  
    state: 'MA',  
    zipcode: '02140',  
    category: 'Thai',  
    rating: 4.5,  
    reviewCount: 90
  }
]

function App() {
  return (
    <div className='ravenousContainer'>
      <div>
        <h1>Ravenous</h1>
        <SearchBar />
      </div>
      <BusinessList businesses={businesses}/>
      <BackToTop />
    </div>
  );
}

export default App;
