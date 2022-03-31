import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';

import planetsContext from '../context/planetsContext';

const NameFilter = () => {
  const { changeNameFilter } = useContext(planetsContext);

  return (
    <div>
      <TextField
        size="small"
        variant="outlined"
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        onChange={ ({ target }) => changeNameFilter(target.value) }
      />
    </div>
  );
};

export default NameFilter;
