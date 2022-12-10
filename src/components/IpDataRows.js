import React from 'react';
import IpValueCells from './IpValueCells';

const IpDataRows = ({ ip, ipValue }) => {
  return (
    <>
      <tr key={ip}>
        <td rowSpan={ipValue.length}>{ip}</td>
        <IpValueCells data={ipValue[0]} />
      </tr>
      {
        ipValue.slice(1).map((ipValueRow) => {
          return <tr><IpValueCells data={ipValueRow} /></tr>
        })
      }
    </>
  );
};

export default IpDataRows;