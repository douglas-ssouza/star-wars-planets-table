import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
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
          return <MenuItem key={ option } value={ option }>{option.replace('_', ' ')}</MenuItem>;
        }
        return null;
      },
    );
  };

  return (
    <form>
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        <Box sx={ { margin: '1%' } }>
          <Select
            style={ { width: '235px' } }
            size="small"
            className="form-select"
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            { renderOptions() }
          </Select>
        </Box>
        <Box sx={ { margin: '1%' } }>
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
        </Box>
        <Box sx={ { margin: '1%' } }>
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
        </Box>
        <Box sx={ { margin: '1%' } }>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            disableElevation
            type="button"
            data-testid="button-filter"
            onClick={ () => addNumericFilter({ column, comparison, value }) }
          >
            Filtrar
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default ValueFilter;
