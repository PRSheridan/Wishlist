import App from "./pages/App"
import Home from "./pages/Home"
import Item from "./pages/Item"
import ErrorPage from "./pages/ErrorPage"

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/Item/:id",
            element: <Item />,
        },
      ]
    },
]

export default routes