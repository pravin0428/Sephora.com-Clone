import {createContext, useState} from "react"
 

export const AppContext = createContext()
 
export function AppContextProvider({children}) {

    const [isAuth , setIsAuth] = useState(false)
    const [getmobNo , setGetmobNo] = useState(false)
   
   function loginUser(value){
     setIsAuth(value)
    }

   const logout = () => {
    
  };

   return (
     <AppContext.Provider value={{isAuth , loginUser , getmobNo , logout}} >{children}</AppContext.Provider>
   )
 }
 
 
 
 
 