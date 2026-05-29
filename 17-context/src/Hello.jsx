import { useContext } from 'react'
import LanguageContext from './LanguageContext.jsx'

const greetings = {
  en: 'Hello, World!',
  it: 'Ciao, Mondo!',
  es: 'Hola, Mundo!',
  fr: 'Bonjour, le Monde!',
}

function Hello() {
  const language = useContext(LanguageContext)
  return <h2>{greetings[language] || greetings.en}</h2>
}

export default Hello
