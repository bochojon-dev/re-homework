import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3, BsHeart } from "react-icons/bs";
import useStore from "../../context/store";
import { useGetSearchProductsQuery } from "../../context/productApi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [value, setValue] = useState("");
  const wishes = useStore((s) => s.heart);
  const cart = useStore((s) => s.cart);
  const { data } = useGetSearchProductsQuery({ q: value });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });
  console.log(value);

  const searchItems = data?.products?.map((item) => (
    <div key={item?.id} className="search__item">
      <img width={100} src={item?.images[0]} alt={item?.title} />
      <p>{item?.description}</p>
    </div>
  ));

  return (
    <section className={`header ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <nav className="navbar">
          <Link className="nav__logo" to={"/"}>
            AliExpress
          </Link>
          <div className={`nav__serach ${value ? "serach__border" : ""}`}>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="search"
              placeholder="Search..."
              required
            />
            <button>Qidirib topilsin</button>
            {value ? <div className="serach__item">{searchItems}</div> : <></>}
          </div>
          <ul>
            <li className="nav__link">
              <Link to={"/wishlist"}>
                <BsHeart />
                Sevimlilar
              </Link>
              <sup className="wishes__count">{wishes.length}</sup>
            </li>
            <li className="nav__link">
              <Link to={"/cart"}>
                <BsCart3 />
                Savat
              </Link>
              <sup>{cart.length}</sup>
            </li>
          </ul>
        </nav>
      </div>
      {value.trim() ? (
        <div onClick={() => setValue("")} className="serach__overley"></div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Navbar;
