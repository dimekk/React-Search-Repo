import React, { Component } from 'react';
//import { Router, browserHistory } from 'react-router';
//import { Provider } from 'react-redux';
import axios from 'axios';
//import { loadResults } from './reposAction';
import { RenderSearchBox } from './RenderSearchBox';
import { SearchResults } from './SeachResults';

export class App extends Component {  
  render() {    
    return (
      <section class="main-content">
        <div class="search-container">

            <RenderSearchBox />

            <SearchResults />
        </div>
    </section>     
    );
}; 
}
export function submitSearch(e) {
  e.preventDefault();
  console.log('Searching for repositories...');

  let inputSearch = document.getElementById("search-input");
  let inputValue = inputSearch.value();

  // return function loadResults() {
  //   return function(dispatch) {
  //     return axios
  //       .get("https://api.github.com/search/repositories?q=" + inputValue + "&page=1&per_page=10")
  //       .then(repos => {
  //         console.log("dispatch(loadResultsSucces(repos.data));")
  //       })
  //       .catch(err => {
  //         throw err;
  //       });
  //   }
  // }
}

//



// let currValue;
// export function onChange() {
//     let prevValue = currValue;
//     currValue = store.getState().user;

//     if(prevValue != currValue) {
//         store.dispatch(loadRepos(repos.data));
        
//     }
// }  


export default App;
