import * as React from 'react'
import { connect } from 'react-redux';
import { Link,NavLink,Outlet } from "react-router-dom";
import { boolean } from 'yup';
import Layout from '../components/Layout';
import UserList from '../components/UserList';
import { rootReducerState } from '../Redux/Reducers';
import { UserRepositry } from '../services/UserRepository';
import ReactPaginate from 'react-paginate';
import { consoleTestResultHandler } from 'tslint/lib/test';
import { withRouter } from './WithRouter';
import DeviceList from '../components/DeviceList';
import Popup from '../components/Popup';

interface Props {
    deviceLog:any,
    loading:boolean,
    deviceLogItems:any,
    deviceListItems:any,
    navigate:any,
    match:any,
    id:number,
    deviceList:any, 
    deleteDevice:any,  
}

interface State{
    totalPageCount:number,
    perPage:number,
    currentPage:number,
    search:string,    
    items:any,     
}

class Devices extends React.Component<Props,State>{
    public total = 0;
    constructor(props:Props){
        super(props);      
        this.state ={
            totalPageCount : 2,
            perPage : 1,
            currentPage:0,
            search:'',
            items:[],             
            
        }       
    }



    componentDidMount(): void {
        const user_id:any = window.location.pathname.split('/')[2];
        this.handleFetch(user_id);     
    }

    handleFetch = (user_id:number)=> {
        console.log(user_id,'user_id');
       // const items = this.props.deviceLogItems(currentPage);        
        const items2 = this.props.deviceListItems(user_id);        
        
    }

    handlePageClick = (selectedObject:any)=>{
        console.log(selectedObject.selected);
        this.setState({currentPage:selectedObject.selected});
        this.handleFetch(selectedObject.selected);
    }

    

    setData = (val:any)=>{
       console.log(val)
        this.setState({currentPage:val});
        this.props.navigate('/users?search='+this.state.search+'&page='+val);
        //this.querySet();        
    }
    
    querySet = () =>{
        console.log(this.state.currentPage);
        this.props.navigate('/users?page='+this.state.currentPage);
    }

    handleDeleteDevice(user_id:any,device_id:any){
        const deleteParams = {user_id:user_id,connected_deviceid:device_id};
        this.props.deleteDevice(deleteParams);
        this.handleFetch(user_id);
       // const items = this.props.deviceLogItems();
 
        //console.log(user_id,'user_id');
       // console.log(device_id,'device_id');
     } 
    
    render(){
        if(this.props.deviceLog.data?.length > 0){
            this.total = Math.ceil(2/this.state.perPage);
        }    
        
        return(
            
            <div className="content-wrapper">
    
                <section className="content-header">
                    <h1>
                       Device
                    </h1>
                    
                </section>

                
                <section className="content">
                
                <div className="row">
                    <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                        <h3 className="box-title">Device List</h3>                       
                        </div>                        
                        <div className="box-body table-responsive no-padding">
                        <table className="table table-hover">
                            <thead>
                            <tr>                            
                            <th>Device</th>
                            <th>Device Name</th>
                            <th>Action</th>
                            <th></th>
                            
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.loading ? (<div className="overlay"><i className="fa fa-refresh fa-spin"></i></div>) : null}
                            {this.props.deviceList.data?.length > 0 ?
                              this.props.deviceList.data.map(function(this:Devices,data:any,index:any){                               
                               // return (<DeviceList key={index} devicelog={data} uniqueDevice={true}/>)
                                return ( <tr>
                                    <td>{data.connected_deviceid != 'undefined' ? data.connected_deviceid :'--'}</td>
                                    <td>{data.device_name != 'undefined' ? data.device_name : '--'}</td>   
                                    <td><button onClick={()=>{this.handleDeleteDevice(data.user_id,data.connected_deviceid)}} className={'btn btn-primary'}>Delete</button></td>                        
                                    <td></td>
                                </tr>)
                            },this): (<tr><td colSpan={4}>No Device Available</td></tr>)}
                            </tbody>
                        </table>
                        </div>                       
                        {/* {this.total > 0 ? (
                            <div className="box-footer clearfix">
                                <ul className="pagination pagination-sm no-margin pull-right">
                                    <li><Link to="#">&laquo;</Link></li>
                                    
                                    <li><Link to='javascript:void(0);' onClick={()=>this.setData(1)}>1</Link></li>
                                    <li><Link to='javascript:void(0);' onClick={()=>this.setData(2)}>2</Link></li>
                                    <li><Link to='javascript:void(0);' onClick={()=>this.setData(3)}>3</Link></li>

                                    <li><a href="#">&raquo;</a></li>
                                </ul>
                            </div>
                           ) :null} */}
                    </div>                    
                    </div>
                </div>
                </section>            
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch:any)=>({
    //deviceLogItems: ()=>dispatch(UserRepositry.getDeviceLog(window.location.pathname.split('/')[2])),
    deviceListItems: (user_id:number)=>dispatch(UserRepositry.getDeviceList(user_id)),
    deleteDevice : (deleteUserData:object)=>dispatch(UserRepositry.deleteDevice(deleteUserData)),
})
const mapStateToProps = (state:rootReducerState)=>({
    deviceLog: state.userReducer.deviceLog,
    deviceList: state.userReducer.deviceList,
    loading: state.userReducer.loading,    
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Devices));