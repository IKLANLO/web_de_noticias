import { useContext, useEffect } from 'react';
import './ListNews.styles.scss'
import { Article } from '../Article/Article';
import { GlobalContext } from '../../context/GlobalState';

const ListNews = () => {
  const { articles, getArticles } = useContext(GlobalContext)

  useEffect(() => {
    getArticles()
  }, [])

  const article = articles.map((article) => {
    return (
        <div className='article-container'>
          <Article key={article.id} data={article}/>
        </div>
    )
  })
  return <>{article}</>
}

export default ListNews