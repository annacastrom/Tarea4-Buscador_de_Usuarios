// BrowserRouter + Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Usuarios from './pages/Usuarios'
import Detalle from './pages/Detalle'

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-xl bg-white rounded-[28px] overflow-hidden border border-stone-300 shadow-2xl">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/usuarios" element={<Usuarios />}/>
        <Route path="/usuario/:id" element={<Detalle />}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
