import { useEffect } from 'react'
import './index.css'

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <h1>Carregando...</h1>
    </>
  )
}

export default App
