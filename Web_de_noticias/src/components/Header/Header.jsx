import { Link } from 'react-router-dom'
import './Header.styles.scss'

const Header = () => {
  return (
    <nav>
      <>
        <span><Link className='header-link' to='/'>Home</Link></span>
        <span><Link className='header-link' to='/form'>Subir noticia</Link></span>
        <span><Link className='header-link' to='/list'>Noticias</Link></span>
      </>
    </nav>
  )
}

export default Header