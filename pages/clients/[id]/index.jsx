import { useRouter } from 'next/router'

const ClientPage = () => {
  const router = useRouter()
  const loadProjectHandler = () => {
    router.push('/clients/max/sfd')
  }
  return (
    <div>
      <h1>Client Page</h1>
      <button onClick={loadProjectHandler}>Load Projects</button>
    </div>
  )
}

export default ClientPage
