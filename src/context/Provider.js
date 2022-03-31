import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import planetsContext from './planetsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name', sort: 'ASC',
    },
  });

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await response.json();
    setData(results);
    const columns = Object.keys(results[0])
      .filter((key) => !['edited', 'created', 'films', 'url', 'residents'].includes(key))
      .map((key, index) => ({
        id: index,
        field: key,
        headerName: key.replace('_', ' '),
        width: 125,
        sortable: false,
      }));
    setColumns(columns);
    setLoading(false);
  };

  const changeNameFilter = (name) => {
    setFilter({
      ...filter,
      filterByName: {
        ...filter.filterByName,
        name,
      },
    });
  };

  const addNumericFilter = (newFilter) => {
    setFilter({
      ...filter,
      filterByNumericValues: filter.filterByNumericValues.concat(newFilter),
    });
  };

  const removeNumericFilter = (column) => {
    setFilter({
      ...filter,
      filterByNumericValues: filter.filterByNumericValues.filter(
        (object) => object.column !== column,
      ),
    });
  };

  const changeOrder = (order) => {
    setFilter({
      ...filter,
      order,
    });
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    data,
    columns,
    isLoading,
    filter,
    changeNameFilter,
    addNumericFilter,
    removeNumericFilter,
    changeOrder,
  };

  return (
    <planetsContext.Provider value={ context }>
      { children }
    </planetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
