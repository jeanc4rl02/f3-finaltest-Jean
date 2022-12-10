import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({data}) => {
  const {theme, setFavs, favs} = useContextGlobal();
  const [active, setActive] = useState(false)
  const addFav = ()=>{
    setFavs([...favs, data])
  };

  return (
    <div className="card">
      <Link to={`/detail/${data.id}`} key={data.id} className="link-card">
        <h3>{data.id}</h3>
        <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
        <h4>{data.name}</h4>
        <h5>{data.username}</h5>
      </Link>
      <button onClick={() => {
        addFav() 
        setActive(!active)}} 
        className={`btn-1 ${active ? "active" : ""}`} id={theme.theme}>
        Añadir Favoritos
      </button>
    </div>
  )
};

export default Card;