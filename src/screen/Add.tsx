import * as React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { withRouter } from './WithRouter';
import { Formik } from 'formik';
import { connect } from 'react-redux'
import { Validators } from '../utils/Validator';
import { UserActions } from '../Redux/Actions/UserAction';
import { UserRepositry } from '../services/UserRepository';
import { rootReducerState } from '../Redux/Reducers';


interface State {
    form: {
        username: string,
        email: string,
        deviceId: string,
        password: string,
    },
    data: any[],
}

interface Props {
    add: any,
    getuser: any,
    user: any,
    navigate: any,
    udpateuser:any,
    loading:boolean,
}

class Add extends React.Component<Props, State> {
    constructor(props: Props) {

        super(props);

        this.state = {
            form: {
                username: '',
                email: '',
                deviceId: '',
                password: '',

            },
            data: [],

        }
    }

    componentDidMount(): void {
        
      this.fecthUser();
        

    }

    fecthUser(){
        const user = this.props.getuser(window.location.pathname.split('/')[3]);
    }

    componentDidUpdate(prevProps:any){
        console.log(prevProps,'prevProps');
        if (this.state.form.username !==  this.props.user.data.username) {
        this.setState(prevState => ({
            form: {
              ...prevState.form,
              username: this.props.user.data.username,
              email: this.props.user.data.email,
              deviceId: this.props.user.data.connected_deviceid,
             
            },
          }));
        }

          console.log(this.state.form.username,'rt');
        // // this.setState({...this.state,this.state.form:{username:"asdfdas"}})
        // // console.log(this.props.user.data.username,'username')
        // console.log('asdfdsafd',this.props.user.data);
    }

    handleSubmit = (val: any) => {
       // this.props.add(val);    
        console.log(val,"page redirect")
        const id = window.location.pathname.split('/')[3];
        const data = {id:id,connected_deviceid:val.deviceId,username:val.username,password:val.password}        
        this.props.udpateuser(data);
        
    //this.props.navigate('/users');
    }

    // componentDidMount() {   
    //     const myString = window.location.href;  
    //     this.setState({pageLayout:true})       
    //     const stringContainsReact = myString.includes('edit');
    //     if(stringContainsReact)  {
    //         console.log('Current URL:', myString);
    // } else {
    //         console.log("add called")
    //     }
    //   }

    render() {


        // {this.props.loading ? (<div className="overlay"><i className="fa fa-refresh fa-spin"></i></div>) : null}
        //{this.props.user?.data}
        // this.setState({
        //     form: {
        //       ...this.state.form,
        //       username: "user"
        //     }})
        // this.setState({...this.state.form.username,username:this.props});
        console.log(this.state.form, " test")
        return (

            <div className="content-wrapper">
                <section className="content">

                    <div className="row">
                        <div className="col-md-12">

                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Edit</h3>
                                </div>
                                {this.props.loading ? (<div className="overlay"><i className="fa fa-refresh fa-spin"></i></div>) : null}
                                <Formik initialValues={this.state.form} enableReinitialize={true} validationSchema={Validators.update} onSubmit={(values) => {
                                    this.handleSubmit(values);
                                    console.log(values);
                                }}>
                                    {(props) => {
                                        console.log(props, 'props');
                                        return (
                                            <form className="form-horizontal" onSubmit={props.handleSubmit}>
                                                <div className="box-body">
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label">User Name</label>

                                                        <div className="col-sm-10">
                                                            <input type="text" name="username" onChange={props.handleChange} value={props.values.username} onBlur={props.handleBlur} className="form-control" id="username" placeholder="User Name" />
                                                            {props.touched.username && props.errors.username ? (<div>{props.errors.username}</div>) : null} 
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label">Email</label>

                                                        <div className="col-sm-10">
                                                            <input type="text" name="email" onChange={props.handleChange}  readOnly={true} value={props.values.email} onBlur={props.handleBlur} className="form-control" id="inputEmail3" placeholder="Email"  />
                                                            {props.touched.email && props.errors.email ? (<div>{props.errors.email}</div>) : null} 
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label">Device Id</label>

                                                        <div className="col-sm-10">
                                                            <input type="text" name="deviceId" onChange={props.handleChange} value={props.values.deviceId} onBlur={props.handleBlur} className="form-control" id="inputEmail3" placeholder="Device Id" />
                                                            {props.touched.deviceId && props.errors.deviceId ? (<div>{props.errors.deviceId}</div>) : null} 
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label">Password</label>

                                                        <div className="col-sm-10">
                                                            <input type="text" name="password" onChange={props.handleChange} value={props.values.password}  className="form-control" id="inputEmail3" placeholder="Password" />
                                                            
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="box-footer">
                                                    <Link to={'/users'} className="btn btn-default">Cancel</Link>
                                                    <button type="submit" className="btn btn-info pull-right">Update</button>
                                                </div>

                                            </form>
                                        )
                                    }}

                                </Formik>
                            </div>


                        </div>
                    </div>
                </section>
            </div>

        )

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        add: (user: any) => dispatch(UserRepositry.add(user)),
        getuser: (id: any) => dispatch(UserRepositry.getUserData(id)),
        udpateuser: (user: any) => dispatch(UserRepositry.updateUser(user)),
    }
}

const mapStateToProps = (state: rootReducerState) => {
    return {
        user: state.userReducer.getuser,
        loading: state.userReducer.loading,
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Add));