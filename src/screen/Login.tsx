import * as React from 'react'
import { Formik} from 'formik';
import { Validators } from '../utils/Validator';
import { Api } from '../services/Api';
import { connect } from 'react-redux';
import { AuthRepositry } from '../services/AuthRepositry';
import { rootReducerState } from '../Redux/Reducers';
interface State{
    form:{
        email:string,
        password:string
    },
}

interface Props{
    login :any,
    loggingIn:boolean,
}

class Login extends React.Component<Props,State>{
    constructor(props:Props){
            super(props);
            this.state = {
                form:{
                    email:'',
                    password:'',
                },
                
            }
    }
    onLogin = (val:any) =>{
        this.props.login({email:val.email,password:val.password});
        
         
    }
    render(){
        return (
            <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <Formik initialValues={this.state.form} validationSchema={Validators.login} onSubmit = {(values)=>{
                            this.onLogin(values);
                            //console.log(values);
                        }}>
                {
                    (props)=>{
                        return(
                            <form onSubmit={props.handleSubmit}>
                                <div className="form-group has-feedback">
                                    <input type="text" name="email" onChange={props.handleChange}  value={props.values.email} onBlur={props.handleBlur} className="form-control" id="inputEmail3" placeholder="Email"/>
                                    <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                                    {props.touched.email && props.errors.email ? (<div>{props.errors.email}</div>) : null} 
                                </div>
                                <div className="form-group has-feedback">
                                    <input type="password" name="password" onChange={props.handleChange} value={props.values.password} onBlur={props.handleBlur}  className="form-control" id="inputPassword3" placeholder="Password"/>
                                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                                    {props.touched.password && props.errors.password ? (<div>{props.errors.password}</div>) : null}
                                </div>
                                <div className="row">
                                    {/* <div className="col-xs-8">
                                    <div className="checkbox icheck">
                                        <label>
                                        <input type="checkbox"/> Remember Me
                                        </label>
                                    </div>
                                    </div> */}
                                    
                                    <div className="col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                    </div>
                                   
                                    {this.props.loggingIn ? (<div className="overlay"><i className="fa fa-refresh fa-spin"></i></div>) : null}
                                    
                                </div>
                            </form>
                        )
                    }
                }            

                </Formik>
                
                <a href="#">I forgot my password</a><br/>
             

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch:any) =>({
    login : (data:any) => dispatch(AuthRepositry.login(data)),
})

const mapStateToProps = (state:rootReducerState)=>({
    loggingIn : state.userReducer.loggingIn,
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);