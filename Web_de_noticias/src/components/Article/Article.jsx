import { Link } from 'react-router-dom'
import './Article.styles.scss'

export const Article = (props) => {
  return (
    <div className='article'> 
      <div className='article__img'>
        <img src={props.data.media?.[0]?.['media-metadata']?.[0].url} alt='image'/>
      </div>
      <div>
        <Link to={props.data.url}>{props.data.title}</Link>
        <p className='article-text'>{props.data.abstract}</p>
      </div>
    </div>
  )
}