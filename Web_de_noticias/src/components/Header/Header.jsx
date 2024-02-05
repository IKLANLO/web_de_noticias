import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <span><Link to='/'>Home</Link></span>
      <span><Link to='/form'>Subir noticia</Link></span>
      <span><Link to='/list'>Noticias</Link></span>
    </nav>
  )
}

export default Header