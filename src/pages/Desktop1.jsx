// Desktop1.js
import { Link } from "react-router-dom";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop">
      <div className="home">
        <div className="menu">Menu</div>

        <div className="search-box">
          <img className="search-icon" alt="" src="/vector.svg" />
          <input className="search-input" placeholder="Search here" />
        </div>

        <div className="category-header">
          <div className="category active">ALL</div>
          <div className="category">Breakfast</div>
          <div className="category">Lunch</div>
          <div className="category">Treats</div>
          <div className="category">Dessert</div>
          <div className="category">Dinner</div>
        </div>

        <div className="dishes">
          {[
            { name: "Naan", time: "10min", rating: "5.0", price: "$25.00", image: "/rectangle-58@2x.png" },
            { name: "Butter Chicken", time: "15min", rating: "4.8", price: "$15.00", image: "/rectangle-60@2x.png" },
            { name: "Dal Tadka", time: "10min", rating: "4.5", price: "$10.00", image: "/rectangle-62@2x.png" },
            { name: "Keto Pancakes", time: "15min", rating: "4.7", price: "$35.00", image: "/rectangle-63@2x.png" },
            { name: "Aloo Tikki", time: "20min", rating: "5.0", price: "$20.00", image: "/rectangle-61@2x.png" },
            { name: "Ice Cream Sundae", time: "30min", rating: "4.9", price: "$45.00", image: "/rectangle-59@2x.png" },
          ].map((dish, index) => (
            <Link key={index} to="/desktop-3" className="dish-card">
              <img src={dish.image} alt={dish.name} className="dish-image" />
              <div className="dish-info">
                <b>{dish.name}</b>
                <div className="dish-meta">
                  <img src="/tablerclock.svg" alt="clock" />
                  <span>{dish.time}</span>
                </div>
                <div className="dish-meta">
                  <img src="/materialsymbolslightstaroutline.svg" alt="rating" />
                  <span>{dish.rating}</span>
                </div>
                <div className="dish-price">{dish.price}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="footer">
          <img src="/vector1.svg" alt="icon1" />
          <img src="/group.svg" alt="icon2" />
          <Link to="/desktop-3">
            <img src="/favorite-cart@2x.png" alt="cart" />
          </Link>
          <img src="/vector2.svg" alt="icon4" />
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
