import React from 'react';
import {
  BrowserRouter as Router, Routes,Route,useNavigate
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
import Test from './screen/Test';
import  Navigator  from './utils/navigations/Navigator';

interface Props{
 // naviagate:any,
}

function App(props:Props) {
    
    
  return (
     <Provider store={Store}>
      <Navigator/>
     </Provider>
    
  );
}

export default App;
