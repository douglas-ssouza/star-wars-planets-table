import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';
import Fab from '@mui/material/Fab'
import DeleteIcon from '@mui/icons-material/Delete';

const Filters = () => {
  const {
    filter: { filterByNumericValues },
    removeNumericFilter,
  } = useContext(planetsContext);

  return (
    <section className="">
      {
        filterByNumericValues.map(({ column, comparison, value }) => (
          <div
            key={ column }
            data-testid="filter"
          >
            <p>{ column }</p>
            <p>{ comparison }</p>
            <p>{ value }</p>
            <Fab
              color="error"
              size="small"
              onClick={ () => removeNumericFilter(column) }
            >
              <DeleteIcon />
            </Fab>
          </div>
        ))
      }
    </section>
  );
};

export default Filters;
