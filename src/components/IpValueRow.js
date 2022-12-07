import React from 'react';

const IpValueRow = ({ data }) => {
  const { client, datetime, count } = data;
  const [ hours, minutes, seconds ] = [ datetime.getHours(), datetime.getMinutes(), datetime.getSeconds() ];
  const month = datetime.getMonth();
  const date = datetime.getDate();

  return (
    <tr>
    <td></td>
    <td>{client}</td>
    {/* It would be a good idea to use formatjs library */}
    {/* <td>{ new Intl.DateTimeFormat('en-GB', { 
      dateStyle: 'medium',
      timeStyle: 'long',
      }).format(datetime)
    }</td> */}
    <td>{`${month} ${date} / ${hours}:${minutes}:${seconds}`}</td>
    <td>{count}</td>
  </tr>
  );
};

export default IpValueRow;