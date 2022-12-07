import React from 'react';

const RequestsRow = ({ name, count }) => {
  return (
    <>
      <tr>
        <th colSpan={3}>
          { name }
        </th>
        <th>{ count }</th>
      </tr>
    </>
  );
};

export default RequestsRow;