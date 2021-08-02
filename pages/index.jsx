import Link from 'next/link'

const HomePage = () => {
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
      </ul>
    </div>
  )
}

export default HomePage
