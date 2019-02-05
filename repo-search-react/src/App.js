import React, { Component } from 'react';
//import { Router, browserHistory } from 'react-router';
//import { Provider } from 'react-redux';
//import { loadResults } from './reposAction';
//import { LoadRepos, RndrSearchbox } from './LoadRepos';
import { SearchResults } from './SeachResults';
import { RenderSearchBox } from './RenderSearchBox';


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
// let currValue;
// export function onChange() {
//     let prevValue = currValue;
//     currValue = store.getState().user;

//     if(prevValue != currValue) {
//         store.dispatch(loadRepos(repos.data));
        
//     }
// }  


export default App;
