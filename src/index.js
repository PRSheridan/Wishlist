import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";
import './index.css';

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );

/*
use filter insted of deleted page, filter practice. 
useEffect better - read doc in discord
ItemList and DeletedList can be combined
ItemPage form should be refactored to have one onChange
review controlled components ^^

review session / 1on1, review project review doc
*/