import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todolist from './TodoList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todolist />
  </StrictMode>,
)
