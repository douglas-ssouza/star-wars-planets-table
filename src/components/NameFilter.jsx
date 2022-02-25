import React, { useContext } from 'react';

import planetsContext from '../context/planetsContext';

const NameFilter = () => {
  const { changeNameFilter } = useContext(planetsContext);

  return (
    <div className="mb-1 ms-4">
      <input
        className="form-control"
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        onChange={ ({ target }) => changeNameFilter(target.value) }
      />
    </div>
  );
};

export default NameFilter;
