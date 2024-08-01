"use client";
import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "../reducer";

import { useRouter } from "next/navigation";

export const cartContext = createContext<any>(null);

interface indexForError {
  [key: string]: string;
}

const ContextWrapper = ({ children }: { children: ReactNode }) => {
  let router = useRouter();
  const [userData, setUserData] = useState<any>();
  const [errorViaUserCredential, setErrorViaUserCredential] = useState<
    indexForError | ""
  >("");
  const [loading, setLoading] = useState(false);
  const [cartArray, setCartArray] = useState<any>([]);
  const [errorsOfFirebase, setErrorsOfFirebase] = useState({
    key: "",
    errorMessage: "",
  });
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (cartArray.length !== 0) {
      setQuantity(cartArray.length);
    }
  }, [cartArray]);

  async function fetchApiForAllCartItems() {
    if (userData) {
      let res = await fetch(`/api/cartfunc?user_id=${userData.uuid}`);
      if (!res.ok) {
        throw new Error("Failed to Fetch");
      }
      let dataToreturn = await res.json();
      await setCartArray((prev: any) => dataToreturn.allCartData);
      router.refresh();
      if (dataToreturn) {
        return true;
      }
    }
  }

  useEffect(() => {
    fetchApiForAllCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  async function dispatch(payload: string, data: any) {
    if (payload === "addToCart") {
      console.log("func running of add to cart");
      await fetch(`/api/cartfunc`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    } else if (payload === "removeFromCart") {
      let dataa = await fetch(
        `/api/cartfunc?product_id=${data.product_id}&user_id=${data.user_id}`,
        {
          method: "DELETE",
        }
      );
      let NotData = await dataa.json();
    } else if (payload === "updateCart") {
      setLoading(true);
      let dataa = await fetch(`/api/cartfunc`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      let NotData = await dataa.json();
      setLoading(false);
    }
    let resp = await fetchApiForAllCartItems();
    if (resp) {
      return "sucess";
    } else {
      return "unSucess";
    }
  }

  return (
    <cartContext.Provider
      value={{
        cartArray,
        errorsOfFirebase,
        dispatch,
        userData,
        loading,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default ContextWrapper;
