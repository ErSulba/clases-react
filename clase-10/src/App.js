
import { useState } from 'react';

import ThemedButton from './components/ThemedButton';
import Toolbar from './components/Toolbar';
import { ThemeContext, themes } from './contexts/theme-context';

function App() {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = () => {
    console.log("function has activated")
    setTheme((prevTheme) => {
      let newTheme = prevTheme === themes.dark
        ? themes.light
        : themes.dark
      // ternarios
      //  (condicion) ? return si se cumple : return si no se cumple
      return newTheme
    })
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={theme} >
        <Toolbar changeTheme={toggleTheme} />
      </ThemeContext.Provider>
      <section>
        <ThemedButton >
          Button without provider
        </ThemedButton>
      </section>
    </div>
  );
}

export default App;
