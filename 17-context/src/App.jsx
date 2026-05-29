import { useState } from 'react'
import LanguageContext from './LanguageContext.jsx'
import Hello from './Hello.jsx'

/*
  Context exercise

  LanguageContext is created with createContext. App holds the selected language
  in state and wraps Hello inside LanguageContext.Provider, passing the language
  as the provider value. A select lets the user change the language. Hello reads
  the value with useContext and shows the greeting in the chosen language.

  Context avoids prop drilling: Hello gets the language directly from the
  provider instead of receiving it through props at every level.
*/

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <div>
      <h1>Context</h1>
      <label>
        Language:{' '}
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Espanol</option>
          <option value="fr">Francais</option>
        </select>
      </label>
      <LanguageContext.Provider value={language}>
        <Hello />
      </LanguageContext.Provider>
    </div>
  )
}

export default App
