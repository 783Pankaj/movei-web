import React, { useContext, useEffect } from 'react'

const API_URL = `http://www.omdbapi.com/?apikey=600ff64b=titanic`;
// console.log(API_URL)

const AppContaxt = React.createContext();

//we must need make provider
const AppProvider = ({children})=>{

    const getMoveies= async (url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }catch(error){
            console.log(error);
        }
    };

useEffect(()=>{
       getMoveies(API_URL);
},[])
      return(
        <AppContaxt.Provider value={"pankaj"}>{children}</AppContaxt.Provider>
      );
}
//Global custom hook
const useGlobalContaxt=()=>{
    return(
       useContext(AppContaxt)
    );
}
export {AppContaxt, AppProvider, useGlobalContaxt };
