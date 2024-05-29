import React from "react";
import { FaStar } from "react-icons/fa";
import numberBrm from "number-brm";
import useStore from "../../context/store";
import { BsCart, BsHeartFill, BsHeart, BsCartFill } from "react-icons/bs";

const Product = ({ data, loading, title }) => {
  const wishes = useStore((s) => s?.heart);
  const toggleHeart = useStore((s) => s.toggleHeart);
  const cart = useStore((s) => s?.cart);
  const addToCard = useStore((s) => s.addToCard);
  const product = data?.map((item) => (
    <div key={item?.id} className="product">
      <div className="product__img">
        {item?.images.length <= 1 ? (
          <img src={item?.images[0]} alt={item?.title} className="img" />
        ) : (
          <>
            <img
              src={item?.images[0]}
              alt={item?.title}
              className="product__img-1 img"
            />
            <img
              src={item?.images[1]}
              alt={item?.title}
              className="product__img-2 img"
            />
          </>
        )}
        <div className="top">TOP</div>
        <button onClick={() => addToCard(item)} className="cart">
          {cart?.some((el) => el.id === item.id) ? (
            <BsCartFill style={{ color: "#0009" }} />
          ) : (
            <BsCart />
          )}
        </button>
        <button onClick={() => toggleHeart(item)} className="heart">
          {wishes?.some((el) => el.id === item.id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart />
          )}
        </button>
      </div>
      <p title={item?.description} className="product__desc">
        {item?.description}
      </p>
      <div className="product__rating">
        <FaStar className="star" />
        <span>{item?.rating}</span>
        <span>{item?.stock} ta xarid</span>
      </div>
      <h4 className="product__price">
        {(item?.price * 12500).brm("int", 1)} UZS
      </h4>
    </div>
  ));
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="wrapper">{product}</div>
      {/* <button className="btn">Yanada ko'proq ko'rish</button> */}
    </div>
  );
};

export default Product;
