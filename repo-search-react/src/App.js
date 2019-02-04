import React, { Component } from 'react';
//import {RenderSearchBox} from './RenderSearchBox';
import './App.css';

export class App extends Component {  
  render() {    
    return (
      <section class="main-content">
        <div class="search-container">
            {/* <RenderSearchBox /> */}
            <div id="search-box" class="search-header">
                    <a href="http://github.com/"><img id="logogh" alt="logo-github" src="logogh.png" /></a>
                    <form method="get">
                    <input id="search-input" type="text" name="search" placeholder="Search or jump to..."></input>
                    <input id="search-submit" type="submit" name="submit-phrase" onClick={submitSearch} value="Search"></input>                
                    </form>
                </div>
            {/* <RenderResultsList /> */}
            <div class="result-container">
                <div class="result-info">
                    <p id="result-avatar">Author:</p>
                    <p id="result-name">Repository name:</p>
                    <p id="result-stars">Stars:</p>
                </div>
                <div class="searchResults">
                   
                </div>
            </div>
        </div>
    </section>     
    );
}; 
}
export function submitSearch(e) {
  e.preventDefault();
  console.log('Searching for repositories...');
}
let inputSearch = document.getElementById("search-input");
let inputValue = inputSearch.value();

export function loadResults() {
  return function(dispatch) {
    return axios
      .get("https://api.github.com/search/repositories?q=" + inputValue + "&page=1&per_page=10")
      .then(repos => {
        dispatch(loadResultsSucces(repos.data));
      })
      .catch(err => {
        throw err;
      });
  }
}

      // let currValue;
      // function onChange() {
      //     let prevValue = currValue;
      //     currValue = store.getState().user;

      //     if(prevValue != currValue) {
      //         store.dispatch(loadRepos(repos.data));
              
      //     }
      // }  


export default App;
