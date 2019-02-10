export const reposSearch = (state = '', action) => {
    switch(action.type) {
        case 'SEARCH_REPOS':
            return action.text;
        default:
            return state
    }
}