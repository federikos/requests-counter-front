import './App.css';
import { useEffect, useState } from 'react';
import Table from './components/Table';

function App() {
  const [ requestsData, setRequestsData ] = useState(null);
  //handling requests in useEffect is not the best idea, I would use useSWR or react-query IRL
  useEffect(() => {
    fetch("/requests_info")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setRequestsData(data);
    })
    .catch((err) => {
      console.error(err)
    })
  }, []);

  function resetClick() {
    fetch("/reset")
      .then((res) => {
        setRequestsData(null);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <div className="App">
      {
        !requestsData
          ? "There is no data to display"
          : <Table requestsData={requestsData} resetClick={resetClick} />
      }
    </div>
  );
}

export default App;
