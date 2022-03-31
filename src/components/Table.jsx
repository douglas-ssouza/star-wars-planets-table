import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid'

import planetsContext from '../context/planetsContext';

const Table = () => {
  const { isLoading, columns, data, filter } = useContext(planetsContext);

  const filterPlanetsByName = () => {
    const { filterByName: { name } } = filter;
    return name
      ? data.filter((planet) => planet.name.includes(name))
      : data;
  };

  const filterPlanetsByValues = (planets) => {
    const { filterByNumericValues: valuesFilter } = filter;
    return planets.filter((planet) => (
      valuesFilter.every(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        default:
          return Number(planet[column]) === Number(value);
        }
      })
    ));
  };

  const sortPlanets = () => {
    const planetsByName = filterPlanetsByName();
    const planets = filterPlanetsByValues(planetsByName);

    const { order: { column, sort } } = filter;

    const stringColumns = ['name', 'gravity', 'terrain', 'films', 'created', 'edited', 'url'];

    if (stringColumns.includes(column)) {
      const POS = 1;
      const NEG = -1;
      planets.sort((a, b) => {
        if (sort === 'ASC') return a[column] > b[column] ? POS : NEG;
        return b[column] > a[column] ? POS : NEG;
      });
    } else {
      planets.sort((a, b) => {
        if (sort === 'ASC') return Number(a[column]) - Number(b[column]);
        return Number(b[column]) - Number(a[column]);
      });
    }

    return planets.map((planet, index) => { 
      delete planet.url;
      delete planet.edited;
      delete planet.created;
      return { ...planet, id: index };
    });
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={ { height: '400px', width: '100%' } }>
      <DataGrid
        columns={ columns }
        rows={ sortPlanets() }
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default Table;
