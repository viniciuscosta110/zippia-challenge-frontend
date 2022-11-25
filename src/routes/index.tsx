import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../views/Home'
import { ProtectedRoute } from './ProtectedRoute'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test/jobs" element={<Home />} />
        <Route path="*" element={
          <ProtectedRoute>
            <p>Página não encontrada: 404!</p>
          </ProtectedRoute>} 
        />
      </Routes>
    </BrowserRouter>
  )
}
