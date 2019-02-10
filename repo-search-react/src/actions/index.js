export const repoFetched = (repos) => ({
    type: 'FETCH_REPOS_SUCCESS',
    repos
});


export const searchRepos = (text) => ({
    type: 'SEARCH_REPOS',
    text
});
