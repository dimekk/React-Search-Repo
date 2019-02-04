import React, { Component } from 'react';
import {submitSearch} from './App';

 export function RenderSearchBox() {
        return (
            <div id="search-box" class="searcher-header">
                    <a href="http://github.com/"><img id="logogh" alt="logo-github" src="logogh.png" /></a>
                    <form method="get">
                    <input id="search-input" type="text" name="search" placeholder="Search or jump to..."></input>
                    <input id="search-submit" type="submit" name="submit-phrase" onClick={submitSearch} value=""></input>                
                    </form>
                </div>
        );
    }    


