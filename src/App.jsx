import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}