import { useRouter } from 'next/router'
export default function BlogPage() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h1>Hello Blog</h1>
    </div>
  )
}
