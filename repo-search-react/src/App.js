import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <section class="main-content">
        <div class="searcher-container">
            <div id="search-box" class="searcher-header">
              <a href="http://github.com/"><img id="logogh" src="logogh.png" /></a>
              <form method="get">
                <input id="search-input" type="text" name="search" placeholder="Search or jump to..."></input>
                <input id="search-submit" type="submit" name="submit-phrase" onClick="" value=""></input>                
              </form>
            </div>
            <div class="result-container">
                <div class="result-info">
                    <p id="result-avatar">Author:</p>
                    <p id="result-name">Repository name:</p>
                    <p id="result-stars">Stars:</p>
                </div>
                <div class="searchResults">
                  <div class="result">User, Stars, Repository</div> 
                </div>
            </div>
        </div>
    </section>          
        
    );
}

        // var inputSearch = document.getElementById("search-input");
        // var inputValue = inputSearch.value();

        // function submitSearch() {
        //     console.log('Searching for repositories...');
        //     function prevDefault(e) {
        //         e.preventDefault();
        //     };
        // }
      //   function loadRepos() {
      //     return function(dispatch) {
      //         return axios
      //             .get("https://api.github.com/search/repositories?q=" + inputValue + "&page=1&per_page=10")
      //             .then(repos => {
      //                 dispatch(loadReposSuccess(repos.data));
      //                 console.warn(repos.data);
      //             })
      //             .catch(err => {
      //                 throw err;
      //             });
      //     };
      // }     

      // let currValue;
      // function onChange() {
      //     let prevValue = currValue;
      //     currValue = store.getState().user;

      //     if(prevValue != currValue) {
      //         store.dispatch(loadRepos(repos.data));
              
      //     }
      // }   
}

export default App;
