import App from "./pages/App"
import ItemList from "./pages/ItemList"
import DeletedList from "./pages/DeletedList"
import ItemPage from "./pages/ItemPage"
import EditPage from "./pages/EditPage"
import ErrorPage from "./pages/ErrorPage"

//App renders ItemList under NavBar
//ItemPage and EditPage replace ItemList
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
          path: "/DeletedList",
          element: <DeletedList />
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