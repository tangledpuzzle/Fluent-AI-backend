import axios from 'axios'
import Promise from 'promise'
import { baseApi } from '../config'
import { toast } from 'react-toastify'
import { getLSItem } from '../utilities/general'
import { useNavigate } from "react-router-dom";
const http = axios.create({ baseURL: baseApi })
http.interceptors.request.use(
  function (config) {
    if(getLSItem('user_token'))
  {      let token  = getLSItem('user_token')
        //@ts-ignore
        config.headers.Authorization = `Bearer ${token}`}
    return config
  },
  function (error) {
    return Promise.resolve({ error })
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    return new Promise(function (resolve, reject) {
      if (err.response && err.response.status === 403) {
        toast.error(err.response.data?.error)
        console.error('Error 403', err.response.data?.message)
        if(window.location.href.includes('/login') || window.location.href.includes('/signup')){

        } else {
            // window.location.href='/login'
        }
        return false
        // return false; //TODO commented fro approve project API
      } else if (err.response && err.response.status === 404) {
        console.error('Invalid Endpoint. Try again')
        return false
      } else if (err.response && err.response.status === 500) {
        console.error('Internal Server Error')
        toast.error(err.response.data?.message)
        return false
      }
      else if (err.response && err.response.status === 401) {
        window.location.href='/login'
        console.error('Error 403', err.response.data.error)
        return false;
      }
      throw err
    })
  }
)

export default http
