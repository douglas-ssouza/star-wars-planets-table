import React, { useState, useContext } from 'react';

import planetsContext from '../context/planetsContext';

const OrderForm = () => {
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');

  const { data, isLoading, changeOrder } = useContext(planetsContext);

  if (isLoading) return null;

  return (
    <form>
      <div>
        <div>
          <select
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
        <div>
          <label htmlFor="ASC">
            <input
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
        <div>
          <label htmlFor="DESC">
            <input
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
        <div>
          <button
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
