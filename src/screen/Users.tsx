import * as React from 'react'
import { connect } from 'react-redux';
import { Link,NavLink,Outlet } from "react-router-dom";
import { boolean } from 'yup';
import Layout from '../components/Layout';
// import UserList from '../components/UserList';
import { rootReducerState } from '../Redux/Reducers';
import { UserRepositry } from '../services/UserRepository';
import ReactPaginate from 'react-paginate';
import { consoleTestResultHandler } from 'tslint/lib/test';
import { withRouter } from './WithRouter';


interface Props { 
    userList:any,
    loading:boolean,
    userItems:any,
    navigate:any,
    deleteUser:any,
}

interface State{
    totalPageCount:number,
    perPage:number,
    currentPage:number,
    search:string,
}


class Users extends React.Component<Props,State> {
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
        const items = this.props.userItems();
    }

    handlePageClick = (selectedObject:any)=>{
        console.log(selectedObject.selected);
        this.setState({currentPage:selectedObject.selected});
        this.handleFetch(selectedObject.selected);
    }

   

     handleDeleteUser(id:number):any{
       this.props.deleteUser(id);
       const items = this.props.userItems();

       
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
       

        //let userid = handleDelete();
        // let total = 0;
        // if(this.props.userList.length > 0){
        //     total = Math.ceil(this.props.userList.length/this.state.perPage);
            
        // }
        // console.log(this.props.userList.data?.length,'userlist');
        // console.log(window.location.href);
        if(this.props.userList.data?.length > 0){
            this.total = Math.ceil(2/this.state.perPage);
        }
        
       
        return(
            
            <div className="content-wrapper">
    
                <section className="content-header">
                    <h1>
                       Users
                    </h1>
                    
                </section>

                
                <section className="content">
                
                <div className="row">
                    <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                        <h3 className="box-title">Users List</h3>

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
                            
                            <th>ID</th>
                            <th>UserName</th>
                            <th>Email</th>
                            {/* <th>Device</th> */}
                            <th>Status</th>
                            <th>Date Added</th>
                           
                            
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.loading ? (<div className="overlay"><i className="fa fa-refresh fa-spin"></i></div>) : null}
                            {this.props.userList.data?.length > 0 ? this.props.userList.data?.map(function(this: Users,data:any,index:any){
                                console.log(data,'map data');
                                // return (<UserList key={index} userlist={data} />)
                                const createdOnDate = new Date(data.created_on);
                                const options:any = { year: 'numeric', month: 'numeric', day: 'numeric' };
                                const formattedDate = createdOnDate.toLocaleDateString(undefined, options);
                                return (<tr>
                                    <td>{data.id}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    {/* <td>{data.connected_deviceid}</td> */}
                                    <td>{data.status}</td>
                                    <td>{formattedDate}</td>
                                    <td><Link to={'/devices/'+data.id} className={'btn btn-primary'}>Devices</Link></td>
                                    <td><Link to={'/log/'+data.id} className={'btn btn-primary'}>Sync Log</Link></td>
                                    <td><Link to={'/users/edit/'+data.id} className={'btn btn-primary'}>Edit</Link></td>
                                    <td><button onClick={()=>{this.handleDeleteUser(data.id)}} className={'btn btn-primary'}>Delete</button></td>
                                </tr>)                                
                            },this): null}
                            </tbody>
                        </table>
                        </div>
                        {/* <UserList key={index} onClick={this.handleDelete()} userlist={data} /> */}
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
    userItems: ()=>dispatch(UserRepositry.getUser()),
    deleteUser: (id:number)=>dispatch(UserRepositry.deleteUser(id)),
    
})
const mapStateToProps = (state:rootReducerState)=>({
    userList: state.userReducer.userList,
    loading: state.userReducer.loading,
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Users));