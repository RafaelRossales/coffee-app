import { BrowserRouter, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from "./context/CartProvider"
import { Header } from "./components/Header";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CartContextProvider>
          <Header/>
            <Outlet/>
        </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
