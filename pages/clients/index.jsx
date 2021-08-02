import Link from 'next/link'

const ClientPage = () => {
  const clients = [
    { id: 'max', name: 'Max' },
    { id: 'man', name: 'Man' },
  ]
  return (
    <div>
      <h1>Hello Client</h1>
      <p>Hello all</p>
      <ul>
        {clients.map((client) => (
          <li>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientPage
