import App from "./pages/App"
import ItemList from "./components/ItemList"
import ItemPage from "./pages/ItemPage"
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
          element: <ItemList />
        },
        {
          path: "/ItemPage",
          element: <ItemPage />
        },
        {
          path: "/ItemForm",
          element: <ItemForm />
        }
      ]
    },
]

export default routes