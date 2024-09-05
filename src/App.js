import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'

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
  }
]

function App() {
  return (
    <div>
      <div>Ravenous</div>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
