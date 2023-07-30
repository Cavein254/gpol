import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

let headersList = {
  Accept: '*/*',
  'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA3MTQ4MDEsInN1YiI6IjUiLCJhY2Nlc3MiOmZhbHNlfQ.yEKBz-Z27aC8CLbzRrPU9hIbwmuNfabE0SHz52GQoao',
  'Access-Control-Allow-Origin': 'no-cors',
};

let reqOptions = {
  url: 'http://127.0.0.1:8000/posts',
  method: 'GET',
  headers: headersList,
};

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .request(reqOptions)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Waiting for data</h1>
    </>
  );
}

export default App;
