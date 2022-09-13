import { getProductsInCollection } from "../lib/shopify"

export default function Home({ products }) {
  console.log(products)
  return (
    <div className="text-5xl">hello world</div>
  )
}
export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}
