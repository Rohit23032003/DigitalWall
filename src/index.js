import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {RouterProvider, createBrowserRouter} from 'react-router-dom' ;
import Layout from './Layout';
import CityApp from './CityPosts/CityApp';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<App/>
      },
      {
        path:'about',
        element:<CityApp/>
      }
    ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  <RouterProvider router={router}/>
  </React.StrictMode>
);

