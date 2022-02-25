import React, { useContext } from 'react';

import planetsContext from '../context/planetsContext';

const TableHead = () => {
  const { data } = useContext(planetsContext);

  const keys = Object.keys(data[0]);
  keys.splice(keys.indexOf('residents'), 1);

  return (
    <thead>
      <tr>
        { keys.map((header) => (
          <th key={ header }>
            {header}
          </th>
        )) }
      </tr>
    </thead>
  );
};

export default TableHead;
