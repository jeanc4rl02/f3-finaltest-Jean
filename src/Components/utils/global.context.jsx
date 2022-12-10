import axios from "axios";
import { useEffect, useState, createContext, useContext, useReducer } from "react";


export const initialState = {theme: "light"}

const reduce = (state, a)=>{
  switch(a.type){
    case "theme":
      let tema = {theme: state.theme ==="light" ? "dark" : "light"}
      return tema

      default:
        throw new Error()
  }
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const[theme, dispatch] = useReducer(reduce, initialState)
  const[dentist, setDentist] = useState([])
  const[favs, setFavs] = useState([])
  const card = "card.info"

  useEffect(()=>{
    const storage = JSON.parse(localStorage.getItem(card))
    if(storage){
      setFavs(storage)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem(card, JSON.stringify(favs))
  },[favs])

  const dentists = () =>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setDentist(response.data))
  }

  useEffect(()=>{
    dentists();
  }, [])

  return (
    <ContextGlobal.Provider
      value={{dentist,theme,dispatch,favs,setFavs}}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useContextGlobal = () =>{
  return useContext(ContextGlobal)
}
