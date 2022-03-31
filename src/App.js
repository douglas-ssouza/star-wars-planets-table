import React from 'react';
import Box from '@mui/material/Box';

import Provider from './context/Provider';
import Header from './components/Header';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import ValueFilter from './components/ValueFilter';
import OrderForm from './components/OrderForm';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <Box>
        <Box
          sx={ {
            height: '35vh',
            width: '100%',
          } }
        >
          <Header />
        </Box>
        <Box
          sx={ {
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'space-between',
          } }
        >
          <Box
            sx={ {
              width: '50%',
            } }
          >
            <NameFilter />
            <ValueFilter />
          </Box>
          <Box
            sx={ {
              width: '50%',
            } }
          >
            <OrderForm />
          </Box>
        </Box>
        <Box>
          <Filters />
        </Box>
        <Table />
      </Box>
    </Provider>
  );
}

export default App;
