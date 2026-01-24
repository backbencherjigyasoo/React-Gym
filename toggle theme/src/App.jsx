import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>Toggle Theme</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme}</button>
    </>
  )
}

export default App; 