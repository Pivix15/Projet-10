import '@/scss/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layouts, Home } from '@/pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
