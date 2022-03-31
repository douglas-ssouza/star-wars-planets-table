import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import planetsContext from '../context/planetsContext';

const OrderForm = () => {
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');

  const { data, isLoading, changeOrder } = useContext(planetsContext);

  if (isLoading) return null;

  return (
    <form>
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        <FormControl>
          <FormLabel>Ordem:</FormLabel>
          <Select
            color="secondary"
            size="small"
            data-testid="column-sort"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {
              Object.keys(data[0])
                .filter((key) => !['edited', 'created', 'films', 'url', 'residents'].includes(key))
                .map((option) => (
                  option !== 'residents'
                    ? <MenuItem key={ option } value={ option }>{ option.replace('_', ' ') }</MenuItem>
                    : null
              ))
            }
          </Select>
          <RadioGroup>
            <FormControlLabel
              control={ <Radio /> }
              label="Ascendente"
              data-testid="column-sort-input-asc"
              size="small"
              type="radio"
              value="ASC"
              name="sort"
              id="asc"
              onClick={ ({ target }) => setSort(target.value) }
              defaultChecked
            />
            <FormControlLabel
              control={ <Radio /> }
              label="Descendente"
              size="small"
              data-testid="column-sort-input-desc"
              type="radio"
              value="DESC"
              id="DESC"
              name="sort"
              onClick={ ({ target }) => setSort(target.value) }
            />
          </RadioGroup>
        </FormControl>
        <Box
          sx={ { margin: '1%' } }
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            disableElevation
            type="button"
            data-testid="column-sort-button"
            onClick={ () => changeOrder({ column, sort }) }
          >
            Ordenar
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default OrderForm;
