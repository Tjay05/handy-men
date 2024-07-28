import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider
} from "react-router-dom"
import LandingPage from "./pages/landingPage/Index"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<LandingPage/>} />
    </Route>
  )
)

function App() {
  return(
    <RouterProvider router={router} />
  )
}

export default App
