export const getFilteredRepos = (repos, text) => {
    const reposSearch = text.toLowerCase();

    return repos.filter(repos => {
        const { repoName } = repos.name;

        return (
            repoName.toLowerCase().includes(reposSearch)
        );
    });
};