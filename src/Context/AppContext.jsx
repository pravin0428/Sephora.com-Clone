import {createContext, useState} from "react"
 

 export const AppContext = createContext()
 
export function AppContextProvider({children}) {

    const [isAuth , setIsAuth] = useState(false)
    const [getmobNo , setGetmobNo] = useState(false)
   
   function loginUser(mobNo){
    setGetmobNo(mobNo)
    
   }

   return (
     <AppContext.Provider value={{isAuth , loginUser , getmobNo}} >{children}</AppContext.Provider>
   )
 }
 
 
 
 
 