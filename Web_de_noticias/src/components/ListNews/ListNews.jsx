import { useContext, useEffect } from 'react';
import './ListNews.styles.scss'
import { Article } from '../Article/Article';
import { GlobalContext } from '../../context/GlobalState';
import { MyArticle } from '../Article/myArticle';

const ListNews = () => {
  const { articles, getArticles } = useContext(GlobalContext)
  const localData = JSON.parse(localStorage.getItem('data'))
  let myArts

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

  if (localData === null) {
    myArts = () =>{
      return (
        <></>
      )
    }
  } else {
    myArts = localData.map((data) => {
      {data.url = 'http://' + data.url}
        return (
          <div className='article-container'>
            <MyArticle key={data.name} data={data}/>
          </div>
        )
        })
  }

  return (
    <>
      {article}
      {myArts}
    </>
  )
}

export default ListNews