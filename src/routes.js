import App from "./pages/App"
import ItemList from "./pages/ItemList"
import ItemPage from "./pages/ItemPage"
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
        }
      ]
    },
];

export default routes;