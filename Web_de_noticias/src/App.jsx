import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import ListNews from './components/ListNews/ListNews'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/list' element={<ListNews/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
