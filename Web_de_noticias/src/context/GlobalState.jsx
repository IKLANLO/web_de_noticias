import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios';
import ApiKey from '../ApiKey/ApiKey';

const initialState = {
  articles: []
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getArticles = async () => {
    const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${ApiKey.key}`)
    dispatch({
      type: 'GET_ARTICLES',
      payload: response.data.results
    })
  }

	return (
		<GlobalContext.Provider
			value={{
				articles: state.articles,
				getArticles,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export const GlobalContext = createContext(initialState)