import { useRouter } from 'next/router'

const PortfolioProjectPage = () => {
  const router = useRouter()
  console.log(router.pathname, router.query)
  return (
    <div>
      <h1>Portfolio Project {router.query.projectId}</h1>
    </div>
  )
}

export default PortfolioProjectPage
