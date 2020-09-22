import React, {useContext, useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
debugger
const ThemeContext = React.createContext(themes.light);

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = ()=>{
    debugger
    setTheme(theme.foreground=== '#ffffff'? themes.light: themes.dark)
  }
  debugger
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
     <button onClick={changeTheme}>改变颜色</button>
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  debugger
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  debugger
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
ReactDOM.render(<App name="appComponent" />, document.getElementById('root'))
