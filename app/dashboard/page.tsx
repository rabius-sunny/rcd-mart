import { auth } from '@/configs/auth'

export default async function Dashboard() {
  const session = await auth()
  console.log('session', session)
  return <div>Dashboard</div>
}
