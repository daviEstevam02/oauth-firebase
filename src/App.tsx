import { ChakraProvider } from '../node_modules/@chakra-ui/react/dist/chakra-provider'
import { AuthProvider } from './context/AuthContext/index'
import { LoadProvider } from './context/LoadContext'
import { Routes } from './routes/index'
import { BrowserRouter } from "react-router-dom"

function App() {
 return(
  <ChakraProvider>
   <BrowserRouter>
    <LoadProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LoadProvider>
   </BrowserRouter>
  </ChakraProvider>
 )
}

export default App
