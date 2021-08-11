const ProductDetailsPage = () => {
  return <div></div>
}

export default ProductDetailsPage

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.pid
  return {
    props: {},
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false,
  }
}
