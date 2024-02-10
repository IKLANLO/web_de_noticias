import { Link } from 'react-router-dom'
import './Header.styles.scss'

const Header = () => {
  return (
    <nav className='header'>
      <div>
        <span><Link className='header__link' to='/'>Home</Link></span>
        <span><Link className='header__link' to='/form'>Subir noticia</Link></span>
        <span><Link className='header__link' to='/list'>Noticias</Link></span>
      </div>
    </nav>
  )
}

export default Header