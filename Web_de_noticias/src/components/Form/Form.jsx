import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.styles.scss'

const Form = () => {
  const [data, setData] = useState({
    name: '',
    info: '',
  })
  let navigate = useNavigate()

  const handleInputChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('data', JSON.stringify({
      name: data.name,
      info: data.info
    }))
    console.log({message: `data stored successfully: `}, {name: data.name,
     email: data.info})
    setTimeout(() => {navigate('/')}, 1000)
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__data'>
          <input className='form__data__box' placeholder='título' type='text' name='name' value={data.name} onChange={handleInputChange}/>
          <textarea className='form__data__box' rows={10} placeholder='texto' name='info' value={data.info} onChange={handleInputChange}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form