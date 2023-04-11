import { useState, useEffect } from 'react';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';

function CryptoList({ data, searchTerm }) {
  const filteredData = data.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ListGroup>
      {filteredData.map(coin => (
        <ListGroupItem key={coin.id} className="d-flex align-items-center">
          <img src={coin.image} alt={`${coin.name} logo`} width="25" height="25" className="me-2" />
          <div>
            <div>{coin.name} ({coin.symbol})</div>
            <div className="text-muted">${coin.current_price}</div>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="container mt-5 ">
      <h1 className='text-center'>BizimCoinMareket 🛒</h1>
      <Input type="text" placeholder="Arama yapın" value={searchTerm} onChange={handleSearch} className="mb-3" />
      <CryptoList data={data} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
