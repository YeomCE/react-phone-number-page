let initialState = {
    contactList: [],
    searchList: [],
    keyword: ''
}


function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    {
                        name: payload.name,
                        phoneNumber: payload.phoneNumber,
                    },
                ],

            };

        case 'SEARCH_CONTACT':
            state.searchList =
                payload.searchValue;

        case 'KEYWORD':
            state.keyword =
                payload.keyword;
                
        case 'DELETE_CONTACT' :
            state.contactList = payload.deleteNumberSearch;
        default: return { ...state };

    }
}

export default reducer