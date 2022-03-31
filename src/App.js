import React from 'react';

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
      <div>
        <Header />
        <NameFilter />
        <ValueFilter />
        <OrderForm />
        <Filters />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
