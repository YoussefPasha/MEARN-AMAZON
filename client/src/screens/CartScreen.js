import React from "react";

export default function CartScreen({ match, location }) {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD To Cart : ProductId: {productId} Qty:{qty}
      </p>
    </div>
  );
}
