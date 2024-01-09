import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Post from './pages/Post'
import Card from './components/Card'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <BrowserRouter>
      <div>
        <header className="h-24 bg-blue-900 text-white mb-5 flex items-center">
          <Navbar />
        </header>
        <main className="h-screen pt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
