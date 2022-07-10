import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "../main/Main.css"
import loader from "../../assets/loader.gif"
import { useAuth } from "../../contexts/AuthContext";
function Main() {
  const auth=useAuth()
  return (
    <div className="containerr">
      {auth.loading&&<img alt="loader" src={loader} className="loaderstyle" />}
      <Header />
      <div className={auth.loading?"screenNow blurme":"screenNow"}>
       <Outlet/>
      </div>
    </div>
  );
}

export default Main;
