import React, { Component } from 'react';
import { LoadRepos } from './LoadRepos';
import axios from 'axios';

type Props = {
    onSubmit: Function,
    initialInputValue: string,
};

    type State = {
    inputValue: string,
};

 export class RenderSearchBox extends Component {
     
    props: Props;
    state: State;

    static defaultProps = {
        initialInputValue: '',
    };

    constructor(props: Props) {
        super(props);
        this.state = {
          inputValue: this.props.initialInputValue,
        };
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.initialInputValue !== this.props.initialInputValue) {
          this.setInputValueState(nextProps.initialInputValue);
        }
    }
    
    setInputValueState(inputValue: string): void {
        this.setState(() => ({inputValue}));
    }
    
    handleOnChange = (event: Object): void => {
        event.persist();
        this.setInputValueState(event.target.value);
    }
    
    handleOnSubmit = (event: Object): void => {
        event.preventDefault();
        if (!this.state.inputValue) {return;}
        this.props.onSubmit(this.state.inputValue);
    }
    
    render() {
        return (
            <div id="search-box" class="searcher-header">
                    <a href="http://github.com/"><img id="logogh" alt="logo-github" src="logogh.png" /></a>
                    <form method="get" onSubmit={this.handleOnSubmit}>
                        <input id="search-input" type="text" name="search" placeholder="Search or jump to..." value={this.state.inputValue}></input>
                        <input id="search-submit" type="submit" name="submit-phrase" value=""></input>                
                    </form>
                </div>
        );  
    } 
    submitSearch = (e) => {
        e.preventDefault();
        console.log('Searching for repositories...');

        const { inputValue } = this.state
      
        let inputSearch = document.getElementById("search-input");
      
        return function loadResults(inputValue) {
          return function(dispatch) {
            return axios
              .get(`https://api.github.com/search/repositories?q=${inputValue}/repos`)
              .then(repos => {
                console.log("dispatch(loadResultsSucces(repos.data));")
              })
              .catch(err => {
                throw err;
              });
          }
        }
      };      
    }


