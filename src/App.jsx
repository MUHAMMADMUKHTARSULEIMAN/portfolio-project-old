import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Projects, {loader as projectsLoader} from "./pages/Projects"

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
      },
      {
        path: "projects",
        element: <Projects />,
        loader: projectsLoader
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}