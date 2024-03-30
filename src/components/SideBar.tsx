import * as React from 'react'
import ReactDOM from "react-dom";
import { Outlet, NavLink,useLocation, useParams } from "react-router-dom";
import { AsyncStorageService } from '../services/AsyncStorageService';


interface Props{
}

const SideBar = (props:Props) =>{
    const location = useLocation();
    const param  = useParams();
    const user:any = AsyncStorageService.getUser();
    return(
        <aside className="main-sidebar">
    
<section className="sidebar">

  <div className="user-panel">
    <div className="pull-left image">
      <img src="/logo.jpeg" className="img-circle" alt="User Image"/>
    </div>
    <div className="pull-left info">
      <p style={{textTransform:'capitalize'}}>{user?.userName ? (user?.userName) : ('Alexander Pierce')}</p>
      <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
    </div>
  </div>
  
  
  
  <ul className="sidebar-menu" data-widget="tree">
      <li className="header">MAIN NAVIGATION</li>
      {/* <li className={location.pathname === '/' ? 'active':''} >
      <NavLink to={'/'} ><i className="fa fa-dashboard"></i> <span>Dashboard</span></NavLink>         
       </li> */}
       <li className={location.pathname === '/users' || location.pathname === '/users/add' || location.pathname === '/users/add/'+param.id ? 'active':''}>
       <NavLink to={'/users'}><i className="fa fa-users"></i> <span>Users</span></NavLink>
          {/* <a href="pages/widgets.html">
            <i className="fa fa-users"></i> <span>Users</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span>
          </a> */}
        </li>



        <li className={location.pathname === '/updatetime' || location.pathname === '/updatetime' || location.pathname === '/updatetime/'+param.id ? 'active':''}>
       <NavLink to={'/updatetime'}><i className="fa fa-users"></i> <span>Update Time</span></NavLink>         
        </li>
      </ul>
  
</section>

        </aside>
    )
}

export default SideBar;