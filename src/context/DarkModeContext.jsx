import { useContext } from 'react'
import { createContext } from 'react'
import useLocalStorageState from '../hooks/useLocalStorageState'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode')
    
    function toggleDarkMode() {
        setIsDarkMode((isDark)=>!isDark)
    }
    return (
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) throw new Error('Dark Mode Context was used outside of darkModeProvider')
    return context
}

export { DarkModeProvider, useDarkMode }