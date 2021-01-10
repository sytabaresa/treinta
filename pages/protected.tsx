import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import AccessDenied from '../components/access-denied'
import { initFirebase } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

const firebase = initFirebase()
export default function Page () {
  const [user, loading, error] = useAuthState(firebase.auth());
  const [ content , setContent ] = useState()



  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!user) { return  <Layout><AccessDenied/></Layout> }

  // If session exists, display content
  return (
    <Layout>
      <h1>Protected Page</h1>
      <p><strong>{content || "\u00a0"}</strong></p>
    </Layout>
  )
}