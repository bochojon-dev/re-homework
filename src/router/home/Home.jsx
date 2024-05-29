import React from "react";
import { useGetProductsQuery } from "../../context/productApi";
import Product from "../../components/products/Product";
const Home = () => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <Product title={"Products"} loading={isLoading} data={data?.products} />
  );
};

export default Home;
