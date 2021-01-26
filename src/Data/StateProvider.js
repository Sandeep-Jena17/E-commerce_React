//contextApi
import React,{createContext,useReducer,useContext}from 'react';

//create global data layer
export const StateContext=createContext();



//wrap our app and provide datalayer
export const StateProvider=({reducer,intialState,children})=>{
return <StateContext.Provider value={useReducer(reducer,intialState)}>
    {children}
    </StateContext.Provider>
}

export const useStateValue=()=>useContext(StateContext);