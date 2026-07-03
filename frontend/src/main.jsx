import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { mainStore } from './store/mainStore'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </StrictMode>,
)
