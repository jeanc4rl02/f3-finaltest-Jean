import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";


const Favs = () => {
  const {favs} = useContextGlobal()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="container-favs">
            {favs.map(item =>{
          return(
            <Link to={`/detail/${item.id}`} key={item.id} className="link-card">
              <div className="card-grid">
                <div className="card">
                  <h3>{item.id}</h3>
                  <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
                  <h4>{item.name}</h4>
                  <h5>{item.username}</h5>
                </div>
              </div>
            </Link>
          )})}
      </div>
    </>
  );
};

export default Favs;