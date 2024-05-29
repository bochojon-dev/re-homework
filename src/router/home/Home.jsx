import React from "react";
import { useGetProductsQuery } from "../../context/productApi";
import Product from "../../components/products/Product";
import { motion } from "framer-motion";
const Home = () => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <motion.div
      initial={{ transform: "translate(-100%, 0)" }}
      animate={{ transform: "translate(0, 0)" }}
      exit={{ transform: "translate(-100%, 0)", transition: { duration: 0.1 } }}
    >
      <Product title={"Products"} loading={isLoading} data={data?.products} />
    </motion.div>
  );
};

export default Home;
