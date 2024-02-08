import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ApiKey from '../ApiKey/ApiKey';
import './ListNews.styles.scss'

const ListNews = () => {
  const [articles, setArticles] = useState([])

  const getArticles = async () =>{
    try {
      const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${ApiKey.key}`)

      setArticles(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <div>
      <>
        {articles.map((article, index) => (
          <div className='article-container'>
            <h5 key={index}>{article.title}
              <p className='article-container__text'>{article.abstract}</p>
              <Link to={article.url}>{article.url}</Link>
            </h5>
          </div>
        ))}
      </>
      
    </div>
  )
}

export default ListNews