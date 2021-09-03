import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [fullscreen, setFullscreen] = useState(false)
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen)
  }

  return (
    <AppContext.Provider value={{fullscreen, toggleFullscreen}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({height: null, width: null})

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}