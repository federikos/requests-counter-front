import React from 'react';

const IpValueCells = ({ data }) => {
  const { client, datetime: dateString, count } = data;
  const datetime = new Date(dateString);
  const [ hours, minutes, seconds ] = [ datetime.getHours(), datetime.getMinutes(), datetime.getSeconds() ];
  const month = datetime.getMonth();
  const date = datetime.getDate();

  return (
    <>
      <td>{client}</td>
      {/* It would be a good idea to use formatjs library */}
      {/* <td>{ new Intl.DateTimeFormat('en-GB', { 
        dateStyle: 'medium',
        timeStyle: 'long',
        }).format(datetime)
      }</td> */}
      <td>{`${month} ${date} / ${hours}:${minutes}:${seconds}`}</td>
      <td>{count}</td>
    </>
  );
};

export default IpValueCells;