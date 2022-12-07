import React from 'react';
import location from '../icons/metro-my-location.svg';
import listBox from '../icons/list-box.svg';
import person from '../icons/material-person.svg';
import calendar from '../icons/calendar.svg';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <div className="cellWithIcon"><img src={location} alt="request source" /> <span>Request source (IP)</span></div>
        </th>
        <th>
          <div className="cellWithIcon"><img src={person} alt="client" /><span>Client</span></div>
        </th>
        <th>
          <div className="cellWithIcon"><img src={calendar} alt="datetime" /><span>Date / Time</span></div>
        </th>
        <th>
          <div className="cellWithIcon"><img src={listBox} alt="count" /><span>Count</span></div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;