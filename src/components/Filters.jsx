import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import planetsContext from '../context/planetsContext';
import Button from '@mui/material/Button';

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
            <Button
              type="button"
              onClick={ () => removeNumericFilter(column) }
            >
              X
            </Button>
          </div>
        ))
      }
    </section>
  );
};

export default Filters;
