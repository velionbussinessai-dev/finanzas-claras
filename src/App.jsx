
import Header from './components/Header';
import Home from './pages/Home';
import Article from './pages/Article';
import Admin from './pages/Admin';
import { Routes, Route } from 'react-router-dom';
export default function App(){
  return (
    <div className="min-h-screen text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/article/:slug" element={<Article/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  )
}
