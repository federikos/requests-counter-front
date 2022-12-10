import React from 'react';
import TableHead from './TableHead';
import RequestsRow from './RequestsRow';
import IpDataRows from './IpDataRows';

const Table = ({ requestsData, resetClick }) => {
  return (
    <>
      <table className='table'>
        <TableHead />
        <tbody>
          {
            Object.keys(requestsData).map((ip) => {
              const ipValue = requestsData[ip];

              return (
                <IpDataRows ip={ip} ipValue={ipValue} />
              )
            })
          }
        </tbody>
        <tfoot>
          <RequestsRow name={"Total requests"} count={getTotalRequestsNumber(requestsData)} />
          <RequestsRow name={"Unique requests"} count={getUniqueRequestsNumber(requestsData)} />
        </tfoot>
      </table>
      <button className="resetButton" onClick={resetClick}>Reset</button>
    </>
  );
};

function getTotalRequestsNumber(requestsData) {
  const total = Object.values(requestsData).reduce((acc, nextArray) => {
    return acc + nextArray.reduce((acc, nextObject) => acc + nextObject.count, 0);
  }, 0);
  return total;
}

function getUniqueRequestsNumber(requestsData) {
  return Object.keys(requestsData).length;
}

export default Table;