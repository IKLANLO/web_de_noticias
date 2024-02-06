import { useEffect, useState } from 'react';
import axios from 'axios'
import ApiKey from '../ApiKey/ApiKey';

const ListNews = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    try {
      const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${ApiKey.key}`)
      console.log('response: ', response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      
      <button onClick={getArticles}>Pulsa</button>
    </>
  )
}

export default ListNews