import CartComp from "@/components/views/CartParent/cartChild";
import ContextWrapper from "@/global/context";

async function fatchAllStoreProducts() {
  let res = await fetch(
    `https://9ybmugwt.api.sanity.io/v2024-07-27/data/query/production?query=*[_type == 'products']`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

const Cart = async () => {
  let allProductsOfStore = await fatchAllStoreProducts();
  return (
    <ContextWrapper>
      <CartComp allProductsOfStore={allProductsOfStore.result} />
    </ContextWrapper>
  );
};

export default Cart;
