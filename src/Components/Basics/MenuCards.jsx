import React from "react";

function MenuCards({ menuData }) {
  console.log(menuData);
  const imgStyle = {
    width: "500px",
  };
  return (
    <>
      <section className="main-card-section">
        {menuData.map((item, index) => {
          const { id, image, name, category, price, description } = item;
          return (
            <>
              <div className="card" key={index}>
                <div className="card-body">
                  <div className="card-number">
                    <div className="number">{id}</div>
                  </div>
                  <div className="food-type">{name}</div>
                  <div className="food-heading">
                    <div>{category}</div>
                  </div>
                  <div className="description">{description}</div>
                  <div className="read">Read</div>

                  <div className="banner">
                    <img src={image} alt="" style={imgStyle} />
                  </div>
                  <div className="order-button">
                    <button>Order Now</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default MenuCards;
