import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    usersId: '',
    users: []
};

// Create Context
export const GlobalContext =createContext(initialState); 

// Provider Component
export const GlobalProvider= ({children}) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

// Actions
const removeUser = (id) => {
    // console.log(id)
    dispatch({
        type: 'REMOVE_USER',
        payload: id
    })
}

const addUser = (user) => {
    // console.log('>>',user)
    dispatch({
        type: 'ADD_USER',
        payload: user
    })
}

const editUser =(user) => {
    console.log(user)
    dispatch({
        type: 'EDIT_USER',
        payload: user
    })
}

const getId =(id) => {
    dispatch({
        type: 'GET_ID',
        payload: id
    })
}


    return(
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser,
            getId
        }}>
            {children}
        </GlobalContext.Provider>
    )
}