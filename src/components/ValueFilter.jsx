import React, { useState, useContext } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import planetsContext from '../context/planetsContext';

const ValueFilter = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior');
  const [value, setValue] = useState(0);
  const { filter, addNumericFilter } = useContext(planetsContext);

  const renderOptions = () => {
    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    const usedOptions = filter.filterByNumericValues.map(({ column: coluna }) => coluna);

    return options.map(
      (option) => {
        if (!usedOptions.includes(option)) {
          return <MenuItem key={ option } value={ option }>{option}</MenuItem>;
        }
        return null;
      },
    );
  };

  return (
    <form>
      <div>
        <div>
          <Select
            style={ { width: '235px' } }
            size="small"
            className="form-select"
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            { renderOptions() }
          </Select>
        </div>
        <div>
          <Select
            style={ { width: '235px' } }
            width="100px"
            size="small"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <MenuItem value="maior que">maior que</MenuItem>
            <MenuItem value="menor que">menor que</MenuItem>
            <MenuItem value="igual a">igual a</MenuItem>
          </Select>
        </div>
        <div>
          <TextField
            placeholder="Valor"
            size="small"
            color="secondary"
            variante="outlined"
            className="form-control"
            data-testid="value-filter"
            type="number"
            onChange={ ({ target }) => setValue(target.value) }
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            disableElevation
            type="button"
            data-testid="button-filter"
            onClick={ () => addNumericFilter({ column, comparison, value }) }
          >
            Filtrar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ValueFilter;
