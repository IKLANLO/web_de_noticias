import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.styles.scss'


const Form = () => {
  const [data, setData] = useState({
    name: '',
    info: '',
    url: ''
  })
  let navigate = useNavigate()
  let localData = JSON.parse(localStorage.getItem('data'))
  
  const handleInputChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if(data.name && data.info && data.url){
      if(localData !== null){
          localData.push({
            name: data.name,
            info: data.info,
            url: data.url
          })
        
      } else {
          localData = [{
            name: data.name,
            info: data.info,
            url: data.url
          }]
      }

      localStorage.setItem('data', JSON.stringify(localData))
      console.log({message: `data stored successfully: `}, {name: data.name,
      email: data.info}, {url: data.url})
      setTimeout(() => {navigate('/list')}, 1000)
    } else {
      
    }
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__data'>
          <input className='form__data__box' placeholder='título' type='text' name='name' value={data.name} onChange={handleInputChange}/>
          <textarea className='form__data__box' rows={10} placeholder='texto' name='info' value={data.info} onChange={handleInputChange}/>
          <input className='form__data__box' placeholder='url' type='text' name='url' value={data.url} onChange={handleInputChange}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form