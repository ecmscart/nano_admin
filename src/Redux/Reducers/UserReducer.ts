import { UserActionTypes } from "../Actions/UserAction";

export interface UserReducerState{
    user : any[],
    userList : any[],
    deviceLog : any[],
    deviceList:any[]
    getuser : any[],
    loggedIn : boolean,
    loggingIn : boolean,
    loading : boolean,
    time:any
}
const initialState:UserReducerState = {
    user:[],
    userList:[],
    deviceLog:[],
    deviceList:[],
    getuser:[],
    loggedIn : false,
    loggingIn : false,
    loading:false, 
    time:0
}
export const UserReducer = (state = initialState,action:any):UserReducerState =>{
    
    switch(action.type){
       case UserActionTypes.LOGIN_REQUEST:{
        return {...state,loggingIn:true}
       }
       case UserActionTypes.LOGIN_REQUEST_SUCCESS:{
        return {...state,loggingIn:false,loggedIn:true,user:action.payload}
       }
       case UserActionTypes.USER_ERROR_OCCURED:{
        return {...initialState}
       }
       case UserActionTypes.USER_LOGOUT:{
                return {...initialState}
       }
       case UserActionTypes.USER_AUTH_UPDATE:{
        return {...state,loggingIn:false,loggedIn:true,user:action.payload}
       }

        case  UserActionTypes.ADD_USER :{
            
             const user = state.userList;
             //console.log(action.payload,'payload data');
             user.push(action.payload);
            //console.log(user,'user');
           return {...state,userList:user};
        }
        case UserActionTypes.REQUEST_USER_LIST:{
            return {...state,loading:true}
        }

        case UserActionTypes.USER_LIST:{
            return {...state,loading:false,userList:action.payload}
        }

        case UserActionTypes.USER_GET:{
            return {...state,loggingIn:false,getuser:action.payload}
        }

        case UserActionTypes.REQUEST_DEVICE_LOG:{
            return {...state,loading:true}
        }
        
        case UserActionTypes.DEVICE_LOG:{
            return {...state,loading:false,deviceLog:action.payload}
        }

        case UserActionTypes.REQUEST_DEVICE_LIST:{
            return {...state,loading:true}
        }

        case UserActionTypes.DEVICE_LIST:{
            return {...state,loading:false,deviceList:action.payload}
        }
        case UserActionTypes.REQUEST_USER_UPDATE:{
            return {...state,loading:true}
        }

       
        case UserActionTypes.UPDATE_USER :{
            return {...state,loading:false};
        }

        case UserActionTypes.REQUEST_DELETE_USER:{
            return {...state,loading:true}
        }
        case UserActionTypes.DELETE_USER :{
            return {...state,loading:false};
        }

        case UserActionTypes.REQUEST_DELETE_Device:{
            return {...state,loading:true}
        }
        case UserActionTypes.DELETE_DEVICE :{
            return {...state,loading:false};
        }

        case UserActionTypes.REQUEST_GET_TIME:{
            return {...state,loading:true}
        }

        case UserActionTypes.GET_TIME:{
            return {...state,loading:false,time:action.payload}
        }

        case UserActionTypes.REQUEST_TIME_UPDATE:{
            return {...state,loading:true}
        }
        case UserActionTypes.TIME_UPDATE:{
            return {...state,loading:false}
        }
        
        default:{
            return state;
        }
            
        


    }
}