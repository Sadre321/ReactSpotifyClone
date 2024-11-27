import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import  stores from './stores'
import { Provider } from 'react-redux'

import Search from 'pages/Search';
import Home from 'pages/Home';
import Library from 'pages/Library';

const router = createBrowserRouter([
    {
        path:"/",
        element:(<App/>),
        children:[
            {
                path:"",
                element:(<Home/>)
            },{
                path:"search",
                element:(<Search/>)
            },{
                path:"library",
                element:(<Library/>)
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={stores}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);