import '@/scss/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layouts, Home } from '@/pages'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path='/sign-in' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
