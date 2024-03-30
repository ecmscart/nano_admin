import React from 'react';
import {
  BrowserRouter as Router, Routes,Route,useNavigate
} from "react-router-dom";
import Layout from '../../components/Layout';
import LoginLayout from '../../components/LoginLayout';
import Add from '../../screen/Add';
import Devicelog from '../../screen/Devicelog';
import Dashboard from '../../screen/Dashboard';
import Login from '../../screen/Login';
import Test from '../../screen/Test';
import Users from '../../screen/Users';
import Devices from '../../screen/Devices';
import UpdateTime from '../../screen/UpdateTime';


export const authStack = () =>{
    return(        
        <Routes>
            <Route element={<LoginLayout/>}>
                <Route path="/"  element={<Login/>} />
            </Route>
        </Routes>
    )
}


export const appStack = () =>{
    return(
        <Routes>
            <Route element={<Layout/>}>
            <Route path="/"  element={<Users/>} />
            <Route path="/users">
                <Route index={true} element={<Users/>}/>
                <Route path="add" element={<Add/>}/>
                <Route path="edit/:id" element={<Add/>}/>
                {/* <Route path="delete/:id" element={<Users/>}/> */}
                <Route path="test" element={<Test/>}/>
            </Route>
            <Route path="/devices/:id" element={<Devices/>}/>
            <Route path="/log/:id" element={<Devicelog/>}/>
            <Route path="/updatetime" element={<UpdateTime/>}/>
            {/* <Route path="/users/add"  element={<Add  navigate={navigate}/>} /> */}
            </Route>
        </Routes>
    )
}