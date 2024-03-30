import * as React from 'react'
import { Link, Outlet } from "react-router-dom";


const LoginLayout = () =>{
    return(
        <div className='hold-transition login-page'>
            <div className="login-box">
                <div className="login-logo">
                    <Link to={'/'}><b>Admin</b></Link>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}


export default LoginLayout;