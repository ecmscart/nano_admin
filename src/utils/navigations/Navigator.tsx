import * as React from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router
  } from "react-router-dom";
import { UserActions } from '../../Redux/Actions/UserAction';
import { rootReducerState } from '../../Redux/Reducers';
import { AsyncStorageService } from '../../services/AsyncStorageService';
import { AuthRepositry } from '../../services/AuthRepositry';
import { appStack, authStack } from './Routes';

interface State{

}
interface Props{
    loggedIn : boolean,
    updateAuthUser:any,
}

class Navigator extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
    }
    async componentDidMount(){
        const user = await AsyncStorageService.getUser();
        if(user){
            this.props.updateAuthUser(user);
        }
        
        
    }
    render(){
        return(
            <Router>
                {this.props.loggedIn ? appStack() : authStack()}
            </Router>
        )
    }
}
const mapStateToProps = (state:rootReducerState)=>({
    loggedIn : state.userReducer.loggedIn,
});
const mapDispatchToProps = (dispatch:any)=>({
    updateAuthUser : (user:any)=> dispatch(AuthRepositry.userAuthUpdate(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(Navigator);

