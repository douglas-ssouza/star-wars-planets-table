import React, { useState, useContext } from 'react';

import planetsContext from '../context/planetsContext';

const OrderForm = () => {
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');

  const { data, isLoading, changeOrder } = useContext(planetsContext);

  if (isLoading) return null;

  return (
    <form>
      <div className="row g-3 m-3">
        <div className="col-sm-3">
          <select
            className="form-select"
            data-testid="column-sort"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {
              Object.keys(data[0]).map((option) => (
                option !== 'residents'
                  ? <option key={ option } value={ option }>{ option }</option>
                  : null
              ))
            }
          </select>
        </div>
        <div className="col-sm-3 form-check text-center">
          <label htmlFor="ASC" className="form-check-label">
            <input
              className="form-check-input"
              data-testid="column-sort-input-asc"
              type="radio"
              value="ASC"
              id="ASC"
              name="sort"
              onClick={ ({ target }) => setSort(target.value) }
              defaultChecked
            />
            Ascendente
          </label>
        </div>
        <div className="col-sm-3 form-check text-center">
          <label htmlFor="DESC" className="form-check-label">
            <input
              className="form-check-input"
              data-testid="column-sort-input-desc"
              type="radio"
              value="DESC"
              id="DESC"
              name="sort"
              onClick={ ({ target }) => setSort(target.value) }
            />
            Descendente
          </label>
        </div>
        <div className="col-sm-3">
          <button
            className="btn btn-dark col-sm-12 ms-2"
            type="button"
            data-testid="column-sort-button"
            onClick={ () => changeOrder({ column, sort }) }
          >
            Ordenar
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
