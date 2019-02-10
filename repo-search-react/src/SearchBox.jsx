import * as React from "react";
import { ResultContainer } from './ResultContainer';

let searchItem;
export class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { repositories: [] };
    }

    render() {
        return(
            <section>
            <div id="search-box" class="searcher-header">
            <a href="http://github.com/"><img id="logogh" alt="logo-github" src="logogh.png" /></a>
                <form>
                    <input id="search-input" type="text" placeholder="Search or jump to..." ref={(input) => { this.searchBox = input; }}/>
                    <button id="search-submit" onClick={this.onClick}></button>
                </form>            
            </div>
            <div class="resulttest">
                <ResultContainer />
                <ul class="result-list">
                { this.state.repositories.map( ( item, index ) => (
                    <li class="result" key={ index }>
                        <div class="author">
                            <p class="box-title">Author</p>
                            <img class="avatar" src={item.owner.avatar_url} alt=""></img>                     
                            <p className="repo-owner"><a href={item.owner.url}>{item.owner.login}</a></p>
                            <p className="stars">Stars: {item.stargazers_count}</p>
                        </div>                        
                        <div className="content">  
                            <div class="repoName" ><a href={item.url}>{ item.name }</a></div>                            
                            <div className="description">{item.description}</div>
                        </div>                    
                    </li>                   
                )) }
                </ul>
            </div>
        </section>   
        );
    }

    onClick(e) {
        searchItem = this.searchBox.value;
        let endpoint = 'https://api.github.com/search/repositories?sort=item.owner.login&order=desc&q=' + searchItem;
        console.log(searchItem);
        fetch(endpoint)
            .then(blob => blob.json())
            .then(response => {
                this.setState({ repositories: response.items });
            });
        e.preventDefault();
    }
}