import * as React from 'react';
import { Header } from './Header';
import { SearchBox } from './SearchBox';
import './index.css';

export class App extends React.Component {  

 render() {    
    return (
      <div class="main">
        <Header />
        <section class="main-content">
          <div class="search-container">
          <SearchBox />          
          </div>
        </section>
      </div>
    );
  }
}