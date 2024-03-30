import * as React from 'react'
import { Link,NavLink,Outlet } from "react-router-dom";

interface State{

}

interface Props{
    userlist:any,
    onclick:any,
}

 



const UserList = (props:Props)=>{
  const  handleDelete = (id:number):any=>{
        console.log(id);
    }
    //console.log(props.userlist.id);
    const createdOnDate = new Date(props.userlist.created_on);
  const options:any = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const formattedDate = createdOnDate.toLocaleDateString(undefined, options);
    return(
        <tr>
            <td>{props.userlist.id}</td>
            <td>{props.userlist.username}</td>
            <td>{props.userlist.email}</td>
            <td>{props.userlist.connected_deviceid}</td>
            <td>{props.userlist.status}</td>
            <td>{formattedDate}</td>
            <td><Link to={'/log/'+props.userlist.id} className={'btn btn-primary'}>Sync Log</Link></td>
            <td><Link to={'/users/edit/'+props.userlist.id} className={'btn btn-primary'}>Edit</Link></td>
            <td><button onClick={props.onclick(props.userlist.id)}  className={'btn btn-primary'}>Delete</button></td>

           


            
        </tr>
    )
}

export default UserList;