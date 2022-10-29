import {createContext, useState} from "react"

const CreatedContext=createContext()

export function CardContextProvider({children}){
    const [items, setItem] = useState([]);
    const addToCart=(clothing, amount)=>{
        setItem((prevItems)=>[...prevItems, {clothing, amount}])
    }
    return(
        <CreatedContext.Provider value={{items, addToCart}}>{children}</CreatedContext.Provider>
    )
}


export default CreatedContext;