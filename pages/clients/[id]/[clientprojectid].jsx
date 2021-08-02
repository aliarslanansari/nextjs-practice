import { useRouter } from 'next/router'
import Head from 'next/head'
const ProjectPage = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Project Page {router.query.clientprojectid}</h1>
    </div>
  )
}
export default ProjectPage
