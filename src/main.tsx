import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductsList from './components/ProductsList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsList></ProductsList>
  </StrictMode>,
)
