import React, { Component } from 'react';
import curry from 'lodash/fp/curry';
import map from 'lodash/fp/map';
import Repo from './Repo';
import { RenderSearchBox } from './RenderSearchBox';

type Props = {
    entities: Object,
    ids: Array<number>
};

const renderSearchResults = curry((entities, item) => {
    const {id} = entities[item];
    return (
        <Repo {...entities[id]} />
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
// export class LoadResults {
//     render() {
//         return (
           
//         );  
//     }
// }