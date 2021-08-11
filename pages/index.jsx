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
          <Link key={prod.id} href={`/${prod.id}`}>
            {prod.name}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default HomePage

export async function getStaticProps(context) {
  return {
    props: {
      product: [
        { id: 'p1', name: 'hello p1' },
        { id: 'p2', name: 'hello p2' },
        { id: 'p3', name: 'hello p2' },
        { id: 'p4', name: 'hello p4' },
      ],
    },
    // redirect: {
    //   destination: '/nodata',
    // },
    // notFound: false,
    revalidate: 10,
  }
}
