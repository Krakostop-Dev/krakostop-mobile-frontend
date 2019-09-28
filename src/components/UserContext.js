import React, {createContext}from 'react'

export const UserContext = createContext({
    user: {
        name: "",
    },
});
const initialState = {
    user : {
        name: "Krzysiek"
    }
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'loginUser':
            console.log("ELO2");
            return {
                ...state,
                name: action.payload
            };
        default:
            console.log("e");
            return state;
    }
};

export const UserContextProvider = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState.user);
    return (
        <UserContext.Provider
            value={{
                ...state,
                handleLogin: () => dispatch({ type: 'loginUser', payload: "LOL" })
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
