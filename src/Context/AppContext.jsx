import {createContext, useState} from "react"

 export const AppContext = createContext()
 
export function AppContextProvider({children}) {

    const [isAuth , setIsAuth] = useState(false)

   return (
     <AppContext.Provider value={{isAuth}} >{children}</AppContext.Provider>
   )
 }
 
 
 
 
 