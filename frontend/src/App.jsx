import '@/style/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess, setUser } from './store/authSlice'
import PublicRouter from '@/pages/Public/PublicRouter'
import AdminRouter from '@/pages/Admin/AdminRouter'
import AuthGuard from '@/_helpers/AuthGuard'

function App() {
  const dispatch = useDispatch()
  const init = useRef(null) // ne déclenche pas de re-render

  if (init.current == null) {
    init.current = true
    
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(loginSuccess(token))
      fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(profile => {
        dispatch(setUser({
          firstName: profile.body.firstName,
          lastName: profile.body.lastName
        }))
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PublicRouter />} />
        <Route path='/admin/*' element={
          <AuthGuard>
            <AdminRouter />
          </AuthGuard>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
