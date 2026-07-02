import '@/scss/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PublicRouter from '@/pages/Public/PublicRouter'
import AdminRouter from '@/pages/Admin/AdminRouter'
import AuthGuard from '@/_helpers/AuthGuard'


function App() {

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
