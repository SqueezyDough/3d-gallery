import React, { createContext, useContext } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [fullscreen, setFullscreen]  =  React.useState(false)
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