import React from "react";
import { getAllProducts } from "../../lib/shopify";

export default function ProductPage({ product }) {
  return <div>ProductPage</div>;
}

export async function getStaticPaths() {
  const products = await getAllProducts();
  const paths = products.map((item) => {
    const handle = String(item.node.handle);

    return {
      params: { handle },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
