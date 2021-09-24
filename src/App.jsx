import './App.css';

// Components
import Header from "./components/Header/Header";


// Styles
import { ThemeProvider, createGlobalStyle } from "styled-components";
import colors from "./theming/colors";
import fonts from "./theming/fonts";

const GlobalStyle = createGlobalStyle`
  * {margin: 0; padding: 0; box-sizing: border-box;}
`


function App() {
  return (
    <>
    <GlobalStyle />
      <ThemeProvider theme={ colors }>
      <ThemeProvider theme={ fonts }>
        <Header></Header>
      </ThemeProvider>
      </ThemeProvider>
   </>
  );
}

export default App;
