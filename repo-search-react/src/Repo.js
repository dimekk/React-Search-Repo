import React from 'react';
import {Link} from 'react-dom';

type Props = {
    repo: string,
    avatar_url: string,
  };
  
  export default function Repo({repo, avatar_url}: Props) {
    return (
      <Link to={repo}>
        <div class='result'>
            <a href=" + repoItems[i].owner.html_url+ " target='_blank'>
                <img id='avatar' src=""/>
                <p id='repo-name'></p>
                <p id='repo-author'></p>
            </a>
        </div>
        
        <div>          
        </div>
        <p>{repo}</p>
      </Link>
    );
  }