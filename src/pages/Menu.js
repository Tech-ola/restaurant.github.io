import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from './../components/MenuItem';
import "./../styles/Menu.css"

function Menu(){
    return (
        <div className="menu">
            <h1 className="menuTitle">
        Our Menu
            </h1>
            <div className="menuList">
            {
            MenuList.map((MenuItem, key) =>{
                return <div> {MenuItem.name}</div>;
            })}
            </div>

        </div>
    );
}

export default Menu