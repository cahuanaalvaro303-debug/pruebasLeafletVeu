import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

//Respuestas de la API 
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
    }

    return Promise.reject(error)
  }
)

export default api

/*import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use((config) => {
  console.log('Enviando petición:', config.url)

  return config
})

api.interceptors.response.use(
  (response) => {
    console.log('Respuesta recibida:', response.status)

    return response
  },
  (error) => {
    console.log(
      'Error HTTP:',
      error.response?.status
    )

    return Promise.reject(error)
  }
)

export default api*/