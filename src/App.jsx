import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider
} from "react-router-dom"
import Navbar from "./layout/Navbar"
import LoginScreen from "./pages/account/Login"
import HomeScreen from "./pages/home/Index"
import LandingPage from "./pages/landingPage/Index"
import HireWorkers from "./pages/workers/HireWorkers"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<LandingPage/>} />
      <Route path="Login" element={<LoginScreen/>} />
      <Route element={<Navbar/>}>
        <Route path="Home" element={<HomeScreen/>} />
        <Route path="Hire-Workers" element={<HireWorkers/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return(
    <RouterProvider router={router} />
  )
}

export default App
