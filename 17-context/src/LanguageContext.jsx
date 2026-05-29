import { createContext } from 'react'

// Holds the currently selected language code (e.g. 'en', 'it', 'es').
const LanguageContext = createContext('en')

export default LanguageContext
