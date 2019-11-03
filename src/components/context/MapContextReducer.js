export const reducer = (state, action) => {
    switch (action.type) {
        case 'updateMyLocation':
            return {
                ...state,
                my_location: action.payload.location,
            };
        default:
            return state;
    }
};
