import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

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
            className="border border-3 border-warning mb-3
            p-2 d-flex justify-content-between align-items-baseline"
          >
            <p>{ column }</p>
            <p>{ comparison }</p>
            <p>{ value }</p>
            <button
              className="btn btn-danger"
              type="button"
              onClick={ () => removeNumericFilter(column) }
            >
              X
            </button>
          </div>
        ))
      }
    </section>
  );
};

export default Filters;
