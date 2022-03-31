import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab'
import DeleteIcon from '@mui/icons-material/Delete';

import planetsContext from '../context/planetsContext';

const Filters = () => {
  const {
    filter: { filterByNumericValues },
    removeNumericFilter,
  } = useContext(planetsContext);

  return (
    <Box
      sx={ {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      } }
    >
      {
        filterByNumericValues.map(({ column, comparison, value }) => (
          <Box
            key={ column }
            data-testid="filter"
            sx={ {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '25%',
              border: '1px solid black',
              borderRadius: '3px',
              padding: '0.5%',
              margin: '1% 2%',
            } }
          >
            <p>{ `${column.replace('_', " ")} - ${comparison} - ${value}` }</p>
            <Fab
              color="error"
              size="small"
              onClick={ () => removeNumericFilter(column) }
            >
              <DeleteIcon />
            </Fab>
          </Box>
        ))
      }
    </Box>
  );
};

export default Filters;
