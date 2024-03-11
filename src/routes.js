import App from "./components/App"
import ItemList from "./components/ItemList"
import ItemPage from "./components/ItemPage"
import ErrorPage from "./components/ErrorPage"

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/ItemList",
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