import React, { useContext } from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';

import planetsContext from '../context/planetsContext';

const Table = () => {
  const { isLoading } = useContext(planetsContext);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
