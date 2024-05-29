import React, { useEffect } from "react";
import useStore from "../../context/store";
import numberBrm from "number-brm";
import { MdDeleteOutline } from "react-icons/md";
import Product from "../../components/products/Product";
import { useGetProductsQuery } from "../../context/productApi";
import { motion } from "framer-motion";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isLoading } = useGetProductsQuery();
  const cart = useStore((s) => s.cart);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const incrementCart = useStore((s) => s.incrementCart);
  const decrementCart = useStore((s) => s.decrementCart);
  const cartItems = cart?.map((item) => (
    <div key={item?.id} className="cart__item">
      <img src={item.images[0]} width={100} alt="" />
      <p title={item?.description}>{item?.description}</p>
      <div className="count">
        <button
          disabled={item?.quantity <= 1}
          onClick={() => decrementCart(item)}
        >
          -
        </button>
        <span>{item?.quantity}</span>
        <button
          disabled={item?.quantity >= 10}
          onClick={() => incrementCart(item)}
        >
          +
        </button>
      </div>
      <div className="product__pirce">
        <h4>{(item?.price * 12500).brm("int", 1)} UZS</h4>
        <p>{(item?.price * 12500 * item?.quantity).brm("int", 1)} UZD</p>
      </div>
      <button className="delete" onClick={() => removeFromCart(item?.id)}>
        <MdDeleteOutline />
      </button>
    </div>
  ));
  const cartImage = cart?.map((item) => (
    <img key={item.id} src={item?.images[0]} alt={item?.title} />
  ));
  const sum = cart.reduce((acc, el) => acc + el.price * 12500 * el.quantity, 0);
  return (
    <motion.div
      initial={{ transform: "translate(100%, 0)" }}
      animate={{ transform: "translate(0, 0)" }}
      exit={{ transform: "translate(100%, 0)", transition: { duration: 0.1 } }}
    >
      <div className="container">
        <h2>Savat</h2>
        <div className="cart__page">
          {cart.length ? (
            <div className="cart__wrapper">{cartItems}</div>
          ) : (
            <h2 className="empty__basket">Savatda hech narsa yo'q</h2>
          )}

          <div className="cart__order">
            <h4>Buyurtmani rasmiylashtirish</h4>
            <div className="images__wrapper">{cartImage}</div>
            <div className="hr"></div>
            <div className="product__count">
              <p>{cart.length} ta mahsulot</p>
              <p>{sum.brm("int", 1)} UZS</p>
            </div>
            <div className="product__count">
              <p>Yetkazib berish</p>
              <p>{cart.length ? "30 000 UZS" : "0 UZS"}</p>
            </div>
            <button>
              Rasmiylashtirishga{" "}
              <span>
                {" "}
                {cart.length ? (sum + 30000).brm("int", 1) : "0"} UZS
              </span>
            </button>
          </div>
        </div>
      </div>
      <Product
        title={"Maxsulotlar"}
        data={data?.products}
        loading={isLoading}
      />
    </motion.div>
  );
};

export default Cart;
