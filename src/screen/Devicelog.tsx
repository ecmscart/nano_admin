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

interface Props{
    deviceLog:any,     
    loading:boolean,
    deviceLogItems:any,
    navigate:any,
    match:any,
    id:number,
}

interface State{
    totalPageCount:number,
    perPage:number,
    currentPage:number,
    search:string,
}

class Devicelog extends React.Component<Props,State>{
    public total = 0;
    constructor(props:Props){
        super(props);
        
        this.state ={
            totalPageCount : 2,
            perPage : 1,
            currentPage:0,
            search:'',
        }
    }

    componentDidMount(): void {
        
        this.handleFetch(this.state.currentPage);
    }

    handleFetch = (currentPage:number)=>{
        console.log(currentPage,'currentPage');
        const items = this.props.deviceLogItems(currentPage);
        
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
    
    render(){
        
        
        if(this.props.deviceLog.data?.length > 0){
            this.total = Math.ceil(2/this.state.perPage);
        }
        
       
        return(
            
            <div className="content-wrapper">
    
                <section className="content-header">
                    <h1>
                       Device Log
                    </h1>
                    
                </section>

                
                <section className="content">
                
                <div className="row">
                    <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                        <h3 className="box-title">Device Log List</h3>

                        {/* <div className="box-tools">
                            <div className="input-group input-group-sm" style={{width: "150px"}}>
                                <Link to={'/users/add'} className={'btn btn-primary'}>Add</Link>
                            <input type="text" name="table_search" className="form-control pull-right" placeholder="Search"/>

                            <div className="input-group-btn">
                                <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                            </div>
                            </div>
                        </div> */}
                        </div>
                        
                        <div className="box-body table-responsive no-padding">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                            
                            <th>Device</th>
                            <th>Device Name</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Signal Strength</th>
                            <th>Status</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.loading ? (<div className="overlay"><i className="fa fa-refresh fa-spin"></i></div>) : null}
                            {this.props.deviceLog.data?.length > 0 ? this.props.deviceLog.data?.map(function(data:any,index:any){
                                console.log(data,'map data');
                                return (<DeviceList key={index} devicelog={data} uniqueDevice={false}/>)
                            }): (<tr><td colSpan={4}>No Device Log Available</td></tr>)}
                            
                            
                            </tbody>
                        </table>
                        </div>
                        {/* <ReactPaginate
                            pageCount={this.total}
                            marginPagesDisplayed={2}
                            onPageChange={this.handlePageClick}
                            containerClassName={'container'}
                            previousLinkClassName={'page'}
                            breakClassName={'page'}
                            nextLinkClassName={'page'}
                            pageClassName={'page'}
                            disabledClassName={'disabled'}
                            activeClassName={'active'}
                        /> */}
                        {/* {
                           this.total > 0 ? (
                            <div className="box-footer clearfix">
                                <ul className="pagination pagination-sm no-margin pull-right">
                                    <li><Link to="#">&laquo;</Link></li>
                                    
                                    <li><Link to='javascript:void(0);' onClick={()=>this.setData(1)}>1</Link></li>
                                    <li><Link to='javascript:void(0);' onClick={()=>this.setData(2)}>2</Link></li>
                                    <li><Link to='javascript:void(0);' onClick={()=>this.setData(3)}>3</Link></li>

                                    <li><a href="#">&raquo;</a></li>
                                </ul>
                            </div>
                           ) :null
                                
                           

                        } */}
                                            
                        
                    </div>
                    
                    </div>
                </div>
                </section>
            
            </div>
        
            
            
        )
    }
}
const mapDispatchToProps = (dispatch:any)=>({
    deviceLogItems: ()=>dispatch(UserRepositry.getDeviceLog(window.location.pathname.split('/')[2])),
    
})
const mapStateToProps = (state:rootReducerState)=>({
    deviceLog: state.userReducer.deviceLog,
    loading: state.userReducer.loading,
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Devicelog));