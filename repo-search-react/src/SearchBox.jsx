import * as React from "react";

let searchItem;
export class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { repositories: [] };
    }

    render() {
        return(
            <div>
                <form>
                    <input type="text" className="searchbox" ref={(input) => { this.searchBox = input; }}/>
                    <button onClick={this.onClick}>Search</button>
                </form>
                <h2>Search results:</h2>
                <ul class="result-list">
                { this.state.repositories.map( ( item, index ) => (
                    <li class="result" key={ index }>
                        <img class="avatar" src={item.owner.avatar_url} alt=""></img>
                        <div className="content">
                            <li class="repoName" ><a href={item.url}>{ item.name }</a></li>
                            <p className="header repo-owner"><a href={item.owner.url}>{item.owner.login}</a></p>
                            {/* <div className="description">{description}</div> */}
                            <p className="stars">{item.stargazers_count}</p> 
                        </div>                    
                    </li>                   
                )) }
                </ul>
            </div>
        );
    }

    onClick(e) {
        searchItem = this.searchBox.value;
        let endpoint = 'https://api.github.com/search/repositories?sort=full_name&order=desc&q=' + searchItem;
        console.log(searchItem);
        fetch(endpoint)
            .then(blob => blob.json())
            .then(response => {
                this.setState({ repositories: response.items });
            });
        e.preventDefault();
    }
}