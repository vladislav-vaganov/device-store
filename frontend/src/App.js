import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const fetchData = async () => {
  const response = await fetch('/list');
  const data = await response.json();

  if (response.status !== 200) {
    throw Error(data.message);
  }

  return data;
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <b>
          Data from API:
          {data.map((item) => (
            <div>{item}</div>
          ))}
        </b>
      </header>
    </div>
  );
}

export default App;
