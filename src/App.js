import React from 'react';
import './App.css';

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
      <Header />
      <NameFilter />
      <ValueFilter />
      <OrderForm />
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
