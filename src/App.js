import './App.css';
import { useEffect } from 'react';
import IpValueRow from './components/IpValueRow';
import RequestsRow from './components/RequestsRow';
import TableHead from './components/TableHead';

const mockData = {
  '192.168.1.1': [
    {
      client: "Chrome",
      datetime: new Date(),
      count: 1
    },
    {
      client: "Edge",
      datetime: new Date(),
      count: 2
    },
    {
      client: "Safari",
      datetime: new Date(),
      count: 5
    }
  ],
  '127.0.0.1': [
    {
      client: "Chrome",
      datetime: new Date(),
      count: 5
    },
    {
      client: "Firefox",
      datetime: new Date(),
      count: 2
    },
  ]
};

function App() {

  //handling requests in useEffect is not the best idea, I would use useSWR of react-query IRL
  useEffect(() => {
    fetch("http://localhost:3003/", {
      mode: "no-cors"
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.error(err)
    })
  }, []);

  return (
    <div className="App">
      <table className='table'>
        <TableHead />
        <tbody>
          {
            Object.keys(mockData).map((ip) => {
              const ipValue = mockData[ip];

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
          <RequestsRow name={"Total requests"} count={getTotalRequestsNumber(mockData)} />
          <RequestsRow name={"Unique requests"} count={getUniqueRequestsNumber(mockData)} />
        </tfoot>
      </table>
      <button className="resetButton" onClick={() => {}}>Reset</button>
    </div>
  );
}

function getTotalRequestsNumber(mockData) {
  const total = Object.values(mockData).reduce((acc, nextArray) => {
    return acc + nextArray.reduce((acc, nextObject) => acc + nextObject.count, 0);
  }, 0);
  return total;
}

function getUniqueRequestsNumber(mockData) {
  return Object.keys(mockData).length;
}

export default App;
