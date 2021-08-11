import Link from 'next/link'

const HomePage = (props) => {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>sdfsdf</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/clients'>Client</Link>
        </li>
        {props.product.map((prod) => (
          <l1 key={prod.id}>{prod.name}</l1>
        ))}
      </ul>
    </div>
  )
}

export default HomePage

export async function getStaticProps(context) {
  return {
    props: {
      product: [{ id: 'p1', name: 'hello' }],
    },
    redirect: {
      destination: '/nodata',
    },
    notFound: false,
    revalidate: 10,
  }
}
