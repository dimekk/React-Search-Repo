export const repos = (state =[], action) => {
    switch (action.type) {
        case 'FETCH_REPOS_SUCCESS':
        return[
            ...action.repos
        ]
        default:
            return state
    }
}