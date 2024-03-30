import * as React from 'react'
import { Link,NavLink,Outlet } from "react-router-dom";

interface State{

}

interface Props{
    devicelog:any
    uniqueDevice:any
}

const DeviceList = (props:Props)=>{
    // console.log(props.devicelog);

    return(
        <tr>          
            <td>{props.devicelog.connected_deviceid}</td>
            <td>{(props.devicelog.device_name != 'undefined') ? props.devicelog.device_name : '--'}</td>
            <td> {props.devicelog.sync_time != 'undefined' ? props.devicelog.sync_time: '--'} </td>
            
            <td> {(props.devicelog.lat != 'undefined' && props.devicelog.longitude) ? (<a href={`https://www.google.com/maps/search/?api=1&query=${props.devicelog.lat},${props.devicelog.longitude}`} target="_blank">{props.devicelog.lat},{props.devicelog.longitude}</a>):'No Location Found' }</td>

            <td>{props.devicelog.rssi != 'undefined' ? props.devicelog.rssi : '--'}  </td>


            <td>{props.devicelog.success ? props.devicelog.success : '--'}  </td>
        </tr>
    )
}

export default DeviceList;