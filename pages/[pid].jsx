const ProductDetailsPage = (props) => {
  if (!props.title) {
    return <p>Loading...</p>
  }
  return <h1>{props.title}</h1>
}

export default ProductDetailsPage

export async function getStaticProps(context) {
  console.log('pid regenerating')
  const { params } = context
  const productId = params.pid
  if (productId > 'p5') {
    return {
      notFound: true,
    }
  }
  return {
    props: { title: 'Title for ' + productId },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: true,
  }
}
