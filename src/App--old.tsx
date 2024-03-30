import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from "react-router-dom";
import {Provider} from 'react-redux'
import Store from './Redux/Reducers'
import logo from './logo.svg';
import './App.css';

import Dashboard from './screen/Dashboard';

import Users from './screen/Users';
import Error from './components/Error';
import Add from './screen/Add';
import Layout from './components/Layout';

interface Props{
 // naviagate:any,
}

function App(props:Props) {
    
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index:true,
            element: <Dashboard />,
          },
          {
            path: "/users",
            children: [
              {
                index:true,
                element: <Users />,
              },
              {
                path: "add",
                element: <Add/>,
              },
            ],
          },
        ],
      },
      
    ]);
  return (
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
    
  );
}

export default App;
