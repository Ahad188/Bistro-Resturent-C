import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Routers/Routers.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
