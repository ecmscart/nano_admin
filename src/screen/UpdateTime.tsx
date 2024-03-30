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
import axios from 'axios';
import { toast,ToastContainer, ToastOptions, ToastPosition  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getEnvVariable } from "../enviornment/index";

interface Props {
    loading:boolean, 
    updatetime:any, 
    gettime:any,
    newtime:any
}

interface State{
    time:number,
    deftime:number,
    data:any,  
}

class UpdateTime extends React.Component<Props,State> {
    public total = 0;
    constructor(props:Props) {
        super(props);      
        this.state = {
            time:0,  
            deftime:0,
            data:{
                message:'failed',
                time:0,
                status:false
            },
        }       
    }

      // Example function to show a toast
      showToast = () => {
        const toastOptions: ToastOptions = {
            position:  'top-right' as ToastPosition,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        };
        toast.success("Time updated successfully!", toastOptions);
    }


    handleUpdateTime = (event:any) => {
        this.setState({time:event.target.value})
      };

      handleSubmit = (event:any) => {
        event.preventDefault();     
        this.props.updatetime({time:this.state.time})
        this.showToast()
      };

    //   updatetimex = () =>{   
    //              if(this.props.loading == false){
    //          this.setState({time:this.props?.newtime?.time})
    //          this.setState({ data: this.props.newtime || this.state.data });
    //          console.log(this.props?.newtime?.time, " time:this.props?.newtime?.time ")
    //  }     

    //     console.log("this.updatetime caledd")
    //   }
 

    componentDidMount(): void {
        // this.props.gettime();
    //   this.updatetimex();
    //   setTimeout(() => { this.handleUpdateTime(this.props.newtime.time); }, 1000)
        
        // fetch data  
        axios.get(`${getEnvVariable().laravel_base_api}user/getTime`)
        .then(response => {                 
            // this.setState({ data: response?.data || this.state.data });
            this.setState({time:response?.data?.time})
        })
        .catch(error => {         
            console.error('Error fetching data:', error);
        });   
    }    
   
    render(){ 
       
        // console.log(this.props.loading, " this.props.loading")
        // console.log(this.props.newtime.time, " this.props.newtime sasd")
        


        return(            
            <div className="content-wrapper">
    
                <section className="content-header">
                    <h1>
                    Sync Time
                    </h1>                    
                </section>                
                <section className="content">                
                <div className="row">
                    <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                        <h3 className="box-title">Time</h3>                       
                        </div>                        
                        <div className="box-body">
                     


                       
      <form onSubmit={this.handleSubmit} className='box-body pb-50'>
     
        <label className="control-label">Insert Time (in milliseconds) :</label>
        <div className="input-group col-lg-5">         
          
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            value={this.state.time}
            onChange={this.handleUpdateTime}/>
          

          <div className="input-group-btn">
          <button type="submit" className="btn btn-primary">      
          Submit
        </button>
          </div>


        </div>
        
      
      </form>
     
   
                        </div>   


            <div className="toastInner">
            {/* <button onClick={this.showToast}>Show Toast</button> */}
                <ToastContainer />
            </div>



                       
                    </div>                    
                    </div>
                </div>
                </section>            
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch:any)=>({
    updatetime: (mTime: any) => dispatch(UserRepositry.updateTime(mTime)),
    
    // gettime: () => dispatch(UserRepositry.getTime()),
})
const mapStateToProps = (state:rootReducerState)=>({  
    loading: state.userReducer.loading,
    // newtime: state.userReducer.time
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UpdateTime));