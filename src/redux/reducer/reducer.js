let initialState = {
    contactList: [],
    searchList: [],
    keyword: ''
}


function reducer(state = initialState, action) {
    const { type, payload } = action
    if(action.type === 'ADD_CONTACT'){
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
    }
    else if(action.type === 'SEARCH_CONTACT'){
        state.searchList =
        payload.searchValue;

        state.keyword = ''
    }
    else if(action.type === 'KEYWORD'){
        state.keyword =
        payload.keyword;
    }
    else if(action.type === 'DELETE_CONTACT'){
        state.contactList = 
        payload.deleteNumberContactList;
        
        state.searchList = 
        payload.deleteNumberSearchList;

    }
    return { ...state };

    // switch (type) {
    //     case 'ADD_CONTACT':
    //         return {
    //             ...state,
    //             contactList: [
    //                 ...state.contactList,
    //                 {
    //                     name: payload.name,
    //                     phoneNumber: payload.phoneNumber,
    //                 },
    //             ],

    //         };

    //     case 'SEARCH_CONTACT':
    //         state.searchList =
    //             payload.searchValue;

    //     case 'KEYWORD':
    //         state.keyword =
    //             payload.keyword;
                
    //      case 'DELETE_CONTACT' :
    //          state.contactList = payload.deleteNumberSearch;

    //     default: return { ...state };

    // }
}

export default reducer