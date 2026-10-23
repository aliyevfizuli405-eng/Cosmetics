import { Search, Heart, ShoppingBasket } from "lucide-react";
import { useContext, useState } from "react";
import { products } from "@/js/products";
import toast, { Toaster } from 'react-hot-toast';
import { NavContext } from "@/contexts/NavContext";
export const Card = ({ product }) => {
  const { wishListedItems, setWishListedItems } = useContext(NavContext);
  const [checkWish,setCheckWish]=useState(false)
  const add = () => toast.success('Added Wished');
  const remove=()=> toast.error("Removed Wished")

  return (
    <div className="product__card relative">
      <img
        src={product.image}
        className="product__card__image  h-[570px] object-cover"
        alt=""
      />
      <h3 className="yazi2 text-center text-[22px] mt-9 ">{product.name}</h3>
      <p className="text-center">
        {" "}
        <span className="text-[#999999] line-through">
          ${product.oldPrice}
        </span>{" "}
        <span className="text-[#666666] text-[18px] font-semibold">
          ${product.price}
        </span>
      </p>
      <span className="absolute top-0 right-0 p-1 flex flex-col z-10000">
        <span className="px-6 py-2.5 bg-[#a3d2a2] text-white font-semibold yazi1">
          {product.badges[0]}
        </span>
        <span
          className={
            product.badges[1] == "NEW" &&
            `bg-[#d05278b3] px-6 py-2.5 text-white font-medium flex flex-col`
          }
        >
          {product.badges[1]}
        </span>
      </span>
      <div className="product__card__hovered absolute top-0 left-0 flex justify-center items-center z-10 w-full h-[85%] bg-[#00000030]">
        <div className="flex flex-col items-center justify-between h-full pt-[70%] pb-[10%] z-100000000">
          <Search color="white" size={100} />
          <div className="flex gap-6">
            <button
              className="bg-white w-14 h-14 shrink-0 flex items-center justify-center rounded-full hover:bg-[#ffffff99] transition-colors duration-500 ease-in-out"
              onClick={() => {
                product.isWishlisted = !product.isWishlisted;setCheckWish(product.isWishlisted);product.isWishlisted? add() : remove();
              }}
            >
              <div className="absolute top-0 left-0">
              </div>
              <i className ={checkWish? "bx bxs-heart text-[20px] text-pink-600 transition-colors duration-300 ease-in" : "bx bxs-heart text-[20px] transition-colors duration-300 ease-in text-black"}></i>
            </button>
            <button
              className={"bg-[#d05872] w-14 h-14 shrink-0 rounded-full hover:bg-[#d05872a0] transition-colors duration-500 ease-in-out flex justify-center items-center"}
              onClick={() => {
                setWishListedItems(
                  products.filter((product) => product.isWishlisted),
                );
              }}
            >
              <i className = "bi bi-basket text-[20px] text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
