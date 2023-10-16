import React, { useState } from "react";
import "../../assets/style.css";
import Menu from "./menu-api";
import MenuCards from "./MenuCards";
import Navbar from "./Navbar";
function Resturent() {
  const uniqeList = [
    ...new Set(
      Menu.map((item) => {
        return item.category;
      })
    ),
    "All",
  ];

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqeList);

  const filterItem = (category) => {
    if (category == "All") {
      setMenuData(Menu);
      return;
    }
    let updatedList = Menu.filter((item) => {
      return item.category == category;
    });

    return setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCards menuData={menuData} />
    </>
  );
}

export default Resturent;
