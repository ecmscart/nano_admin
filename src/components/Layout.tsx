import * as React from 'react'
import ReactDOM from 'react-dom';
import { Link, Outlet } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';


interface Props{
    
}

const Layout = (props:Props) =>{
    return (<div className="hold-transition skin-blue sidebar-mini">
            <div className="wrapper">
                <Header/>
                <SideBar/>
                <Outlet/>
                <Footer/>
            </div>
    </div>)
}

export default Layout;