import '@/scss/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PublicRouter from '@/pages/Public/PublicRouter'
import AdminRouter from '@/pages/Admin/AdminRouter'
import AuthGuard from '@/_helpers/AuthGuard'
import { useDispatch } from 'react-redux'
import { loginSuccess, setUser } from './store/authSlice'


function App() {

  const dispatch = useDispatch()
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
      dispatch(setUser(profile.body.firstName))
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PublicRouter/>} />
        <Route path='/admin/*' element={
          <AuthGuard>
            <AdminRouter />
          </AuthGuard>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
