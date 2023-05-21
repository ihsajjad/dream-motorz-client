import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import AuthProvider from './providers/AuthProvider'
import ToastProvider from './shared/toast/ToastProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastProvider>
        <div className='lg:mx-20 mx-2 lg:mt-4 shadow-2xl'>
          <RouterProvider router={router} />
        </div>
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>,
)
