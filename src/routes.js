import App from "./pages/App"
import ItemList from "./pages/ItemList"
import ItemPage from "./pages/ItemPage"
import EditPage from "./pages/EditPage"
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
          path: "/EditPage",
          element: <EditPage />
        }
      ]
    },
];

export default routes;