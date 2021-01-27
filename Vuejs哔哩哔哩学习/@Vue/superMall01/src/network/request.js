import axios from 'axios'

export function request(config) {
  const instance = axios.create(
    {
      baseURL: 'http://123.207.32.32:8000/api/h8',
      timeout: 5000
    } 
  )
  instance.interceptors.request.use(
    config => {
      // console.log(config)
      return config
  }
    ,error => {
      console.log(error)
    }
  )

  instance.interceptors.response.use(
    res => {
      // console.log(res.data.data.banner)
      return res.data
    },
    error => {
      console.log(error)
    }
  )
  return instance(config)
}