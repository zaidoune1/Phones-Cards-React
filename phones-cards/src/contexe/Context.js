import { createContext, useContext, useReducer } from "react"
import data from "../compounents/data";
import Reducers from "./Reducers";

export const DataContext = createContext();

const Context = ({children}) => {

    const [state, dispatch] = useReducer(Reducers, {

    
        allDatas: data,
        card: [],
        
    })

    return (
    
        
        <DataContext.Provider value={{state, dispatch}}> {children} </DataContext.Provider>

    )
    }

export default Context;

export const HookContext = () => {

    return useContext(DataContext)
}

