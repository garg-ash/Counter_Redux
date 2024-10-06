import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './Todo.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(<Todo />)
