import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom' ;
import Layout from './Layout';
import CityApp from './CityPosts/CityApp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path='about/:CityID' element={<CityApp/>}/>
    </Route>
  )
  );



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  <RouterProvider router={router}/>
  </React.StrictMode>
);

