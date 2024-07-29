"use client";
import { cartContext } from "@/global/context";
import { useContext, useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";

const Cartstate = () => {
  let { cartArray, quantity } = useContext(cartContext);

  return (
    <div className="flex-shrink-0 relative w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
      <div className="w-5 h-5 absolute top-1 right-2 bg-red-600 text-white  text-xs font-light rounded-full flex justify-center items-center">
        {quantity}
      </div>
      <BsCart2 size={28} />
    </div>
  );
};

export default Cartstate;
