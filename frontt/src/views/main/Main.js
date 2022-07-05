import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "../main/Main.css"

function Main() {
  return (
    <div className="containerr">
      <Header />
      <div className="screenNow">
       <Outlet/>
      </div>
    </div>
  );
}

export default Main;
