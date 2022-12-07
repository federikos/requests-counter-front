import './App.css';
import { useEffect, useState } from 'react';
import IpValueRow from './components/IpValueRow';
import RequestsRow from './components/RequestsRow';
import TableHead from './components/TableHead';

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

  if (!requestsData) return null;

  return (
    <div className="App">
      <table className='table'>
        <TableHead />
        <tbody>
          {
            Object.keys(requestsData).map((ip) => {
              const ipValue = requestsData[ip];

              return (
                <>
                  <tr key={ip}>
                    <td>{ip}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                    {
                      ipValue.map((ipValueRow) => {
                        return <IpValueRow data={ipValueRow} />
                      })
                    }
                </>
              )
            })
          }
        </tbody>
        <tfoot>
          <RequestsRow name={"Total requests"} count={getTotalRequestsNumber(requestsData)} />
          <RequestsRow name={"Unique requests"} count={getUniqueRequestsNumber(requestsData)} />
        </tfoot>
      </table>
      <button className="resetButton" onClick={() => {}}>Reset</button>
    </div>
  );
}

function getTotalRequestsNumber(requestsData) {
  const total = Object.values(requestsData).reduce((acc, nextArray) => {
    return acc + nextArray.reduce((acc, nextObject) => acc + nextObject.count, 0);
  }, 0);
  return total;
}

function getUniqueRequestsNumber(requestsData) {
  return Object.keys(requestsData).length;
}

export default App;
