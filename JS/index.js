import React from 'react';
import ReactDom from 'react-dom';
import Babel from 'babel';
import 'css/style.css';

function renderSearchContainer() {
    return (
        <div>
            <div id="search-box"></div>
        </div>
    );
}

ReactDOM.render(
    <renderSearchContainer />,
    document.getElementById('app')
);