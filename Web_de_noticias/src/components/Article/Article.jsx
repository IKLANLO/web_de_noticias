import { Link } from 'react-router-dom'

export const Article = (props) => {
  return (
    <> 
      <Link to={props.data.url}>{props.data.title}</Link>
      <p className='article-text'>{props.data.abstract}</p>
    </>
  )
}