import React from "react";
import { useGetPokemonByNameQuery } from "./../services/pokemon";
import {
  useGetProductByIdQuery,
  useGetAllProductQuery,
  useDeleteProductByIdMutation,
} from "../services/product";
import { ThreeCircles } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContentLoader from "react-content-loader";
import { Swiper, SwiperSlide } from "swiper/react";
const Products = () => {
  //   const obj = useGetPokemonByNameQuery("bulbasaur");
  //   console.log(obj);
  //   const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  //   const obj = useGetProductByIdQuery("4");
  //   console.log(obj.data);

  //   const { data: element } = useGetProductByIdQuery("4");
  //   console.log(element);
  const [deleteProductById] = useDeleteProductByIdMutation();

  const {
    data: allProduct,
    error,
    isLoading,
    refetch,
  } = useGetAllProductQuery();
  //   console.log(error);

  console.log(allProduct);

  //   const deleteHandle = async () => {};

  const handleDelete = async () => {};

  return (
    <div>
      Products
      {isLoading ? (
        // <ThreeCircles
        //   visible={true}
        //   height="100"
        //   width="100"
        //   color="#4fa94d"
        //   ariaLabel="three-circles-loading"
        //   wrapperStyle={{}}
        //   wrapperClass=""
        // />
        // <Skeleton count={50} />
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <circle cx="20" cy="20" r="20" />
        </ContentLoader>
      ) : error ? (
        <h1>HEr hansisa bir xeta</h1>
      ) : (
        <ul>
          {allProduct &&
            allProduct.map((elem) => {
              return (
                <li key={elem.id}>
                  {elem.id}-{elem.name}{" "}
                  <button
                    onClick={async () => {
                      await deleteProductById(elem.id);
                      refetch();
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default Products;
