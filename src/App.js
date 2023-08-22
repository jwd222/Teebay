import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Register,
  Products,
  AddProduct,
  EditProduct,
  AllProducts,
} from './pages'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
