import React, { useEffect } from "react";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
export default function CartScreen({ match, location }) {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD To Cart : ProductId: {productId} Qty:{qty}
      </p>
    </div>
  );
}
