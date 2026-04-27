// BrowserRouter + Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Usuarios from './pages/Usuarios'
import Detalle from './pages/Detalle'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/usuarios" element={<Usuarios />}/>
        <Route path="/usuario/:id" element={<Detalle />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
