import { useState, useEffect, ReactChild, ReactChildren } from 'react'
import { useSession } from 'next-auth/client'
import AccessDenied from './access-denied'
import Layout from "./layout"

interface ProtectedWrapperProps {
  children: ReactChild | ReactChildren;
}

export default function ProtectedWrapper(props: ProtectedWrapperProps) {
  const { children } = props
  const [session, loading] = useSession()
  const [content, setContent] = useState()

  // Fetch content from protected route
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('/api/examples/protected')
  //     const json = await res.json()
  //     if (json.content) { setContent(json.content) }
  //   }
  //   fetchData()
  // }, [session])

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) { return <Layout fullScreen><AccessDenied /></Layout> }

  // If session exists, display content
  return (
    <>
      {children}
    </>
  )
}