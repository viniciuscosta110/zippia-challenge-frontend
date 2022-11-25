/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation, Navigate } from 'react-router-dom'

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  let location = useLocation()

  if(location.pathname !== '/test/jobs') {
    return <Navigate to="/test/jobs" />
  }
  
  return children
}
