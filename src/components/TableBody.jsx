import React, { useContext } from 'react';

import planetsContext from '../context/planetsContext';

const TableBody = () => {
  const { data, filter } = useContext(planetsContext);

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

    return planets;
  }

  return (
    <tbody>
      { 
        sortPlanets().map((planet) => (
          <tr key={ planet.name }>
            <td data-testid="planet-name">{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))
      }
    </tbody>
  );
};

export default TableBody;
