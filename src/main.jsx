import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='lg:mx-20 mx-2 lg:mt-4 border-2 border-purple-700 shadow-xl'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
