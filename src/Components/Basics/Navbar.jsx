import React from "react";

function Navbar({ filterItem, menuList }) {
  console.log(menuList);
  const navStyle = {
    display: "flex",
    gap: "10px",
  };
  return (
    <>
      <nav style={navStyle}>
        {menuList.map((item, index) => {
          return (
            <>
              <div key={item}>
                <button onClick={() => filterItem(item)}>{item}</button>
              </div>
            </>
          );
        })}
        {/* {menuList.map((item, index) => {
          console.log(item, "navbar");
          <div key={index}>
            <button onClick={() => filterItem(item)}>{item}</button>
          </div>;
        })} */}
      </nav>
    </>
  );
}

export default Navbar;
