
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import myStore from './Redex/Store.js'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Provider store={myStore} >
         <App />
      </Provider>
   </BrowserRouter>



)
