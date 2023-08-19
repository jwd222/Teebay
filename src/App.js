import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Products } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Products />} />
        <Route path="/edit-product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
