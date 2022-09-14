import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import { getProductsInCollection } from "../lib/shopify"
import { useRef } from "react";

export default function Home({ products }) {
  const resultRef = useRef(null);
  return (
    <div className="">
      <Hero resultRef={resultRef} />
      <ProductList products={products} ref={resultRef} />
    </div>
  )
}
export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}
