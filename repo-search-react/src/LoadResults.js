import React, { Component } from 'react';
import curry from 'lodash/fp/curry';
import map from 'lodash/fp/map';
import Repo from './Repo';

type Props = {
    entities: Object,
    ids: Array<number>
};

const renderSearchResults = curry((entities, item) => {
    console.log('Success');
    const {id} = entities[item];
    return (
      <li key={id} className="search-results">
        <Repo {...entities[id]} />
      </li>
    );
});

function SearchResults({entities, ids}: Props) {
    return (
      <ul>
        {map(renderSearchResults(entities), ids)}
      </ul>      
    );
}

export default SearchResults;