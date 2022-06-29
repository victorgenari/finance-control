// ROTAS
import { RoutesApp } from './routes/index'

// RENDERIZAR TUDO
import { BrowserRouter } from 'react-router-dom';


// GLOBAL CSS
import { GlobalStyle } from './styles/global'

// TOAST
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

export function App() {


  return (
    <BrowserRouter>
      <RoutesApp />

      <GlobalStyle />
      <ToastContainer />
    </BrowserRouter>
  );
}