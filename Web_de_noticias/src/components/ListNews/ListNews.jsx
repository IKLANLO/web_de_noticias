import { useEffect, useState } from 'react';
import axios from 'axios'
import ApiKey from '../../ApiKey/ApiKey';
import './ListNews.styles.scss'
import { Article } from '../Article/Article';

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
        {articles.map((article, id) => (
          <div className='article-container'>
            <Article key={id} data={article}/>
          </div>
        ))}
      </>
      
    </div>
  )
}

export default ListNews