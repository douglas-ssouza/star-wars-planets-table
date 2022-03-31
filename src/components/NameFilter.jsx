import React, { useContext } from 'react';

import planetsContext from '../context/planetsContext';

const NameFilter = () => {
  const { changeNameFilter } = useContext(planetsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        onChange={ ({ target }) => changeNameFilter(target.value) }
      />
    </div>
  );
};

export default NameFilter;
