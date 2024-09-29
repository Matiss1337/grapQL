import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ApolloProvider from './ApolloProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider>
        <App />
    </ApolloProvider>
  </StrictMode>,
)
