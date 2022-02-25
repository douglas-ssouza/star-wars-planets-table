import React, { useContext } from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';

import planetsContext from '../context/planetsContext';

const Table = () => {
  const { isLoading } = useContext(planetsContext);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="table-responsive-sm">
      <table
        className="table table-dark table-striped table-hover
        table-bordered align-middle m-3 text-center"
      >
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
