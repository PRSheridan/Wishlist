import App from "./pages/App"
import Home from "./pages/Home"
import ItemList from "./pages/ItemList"
import ItemForm from "./pages/ItemForm"
import ErrorPage from "./pages/ErrorPage"

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />,
            children: [
              {
                path: "/",
                element: <ItemList />,
              },
            ]
        },
        {
          path: "/ItemForm",
          element: <ItemForm />
        }
      ]
    },
]

export default routes