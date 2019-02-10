import { combineReducers } from 'redux';
import { repos } from './repos';
import { reposSearch } from './reposSearch';

export default combineReducers({
    repos,
    reposSearch
})