import './index.css'
import App from './App.tsx'
import store from './Store.tsx'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
)
