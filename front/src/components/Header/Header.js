import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaTachometerAlt, FaGem, FaUsers, FaReceipt } from "react-icons/fa";
//images
import logowhite from "../../assets/LogoWhite.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import iconbrand from "../../assets/iconbrand.png";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [rtl] = useState(false);
  return (
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={true}
      breakPoint="md"
    >
      <SidebarHeader>
        <div className={!collapsed ? "iconwlogo" : "collapseiconwlogo"}>
          <img
            alt="logo nahtah"
            src={logowhite}
            style={{ width: collapsed ? "35px" : "85px" }}
          />
          <img
            alt="open close"
            className="hoverpointer"
            onClick={() => setCollapsed(!collapsed)}
            src={collapsed ? menu : close}
            style={{ height: "25px", width: "25px" }}
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
          iconShape="circle"
        >
          <MenuItem icon={<FaTachometerAlt />}>
            لوحة القيادة
            <Link to="/dashboard/home" />
          </MenuItem>
          <MenuItem icon={<FaUsers />}>
            العمال <Link to="/dashboard/employees" />
          </MenuItem>
          <MenuItem icon={<FaReceipt />}>
            الحجوزات
            <Link to="/dashboard/orders" />
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            Employees <Link to="/dashboard/employees" />
          </MenuItem>
        </Menu>
       
         
      </SidebarContent>

      <SidebarFooter
        style={{
          textAlign: "center",
          padding: "15px",
          display: "flex",
          position:"absolute",
          bottom:"0px",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {!collapsed && (
          <div className="hoverpointer" style={{ marginRight: "5px" }}>
            خروج
          </div>
        )}
        <img
          alt="exit"
          className="hoverpointer"
          src={iconbrand}
          style={{ height: "25px", width: "25px" }}
        />
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Header;
