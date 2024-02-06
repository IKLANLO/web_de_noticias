import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
