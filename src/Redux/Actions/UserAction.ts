export enum UserActionTypes {
    ADD_USER = 'add user',
    REQUEST_USER_LIST = 'request user list',
    USER_LIST = 'list user',
    USER_GET = 'get user',
    REQUEST_DEVICE_LOG = 'request device log',
    DEVICE_LOG = 'device log',
    REQUEST_DEVICE_LIST = 'request device list',
    DEVICE_LIST = 'device list',
    REQUEST_USER_UPDATE = 'request user update',
    UPDATE_USER = 'update user',
    REQUEST_DELETE_USER = 'request delete user',
    DELETE_USER = 'delete user',
    LOGIN_REQUEST  = 'Login Request',
    LOGIN_REQUEST_SUCCESS = 'Login Request Success',
    USER_ERROR_OCCURED = 'User Error Occured',
    USER_LOGOUT = 'User Logout',
    USER_AUTH_UPDATE = 'User Auth Update',
    REQUEST_TIME_UPDATE = "Request Update Time",
    TIME_UPDATE = "Update Time",
    REQUEST_GET_TIME = "Request Get Time",
    GET_TIME = "Get Time",
    REQUEST_DELETE_Device = 'request delete device',
    DELETE_DEVICE = 'delete device',
 };


export class UserActions{
    static LoginRequestAction = ()=>{
        return {
            type:UserActionTypes.LOGIN_REQUEST,           
        }
    }
    static LoginRequestSuccesAction = (user:any)=>{
        return {
            type:UserActionTypes.LOGIN_REQUEST_SUCCESS,
            payload:user
        }
    }
    static UserErrorOccured = ()=>{
        return {
            type:UserActionTypes.USER_ERROR_OCCURED,            
        }
    }
    static UserLogoutAction = ()=>{
        return {
            type:UserActionTypes.USER_LOGOUT,
            
        }
    }

    static UserAuthUpdateAction = (user:any)=>{
        return {
            type:UserActionTypes.USER_AUTH_UPDATE,
            payload:user
        }
    }
    static AddUserAction = (user:any)=>{
        return {
            type:UserActionTypes.ADD_USER,
            payload:user
        }
    }
    static REQUEST_USER_LIST = ()=>{
        return{
            type:UserActionTypes.REQUEST_USER_LIST,
           
        }
    }
    static ListUserAction = (list:any)=> {
        return {
            type: UserActionTypes.USER_LIST,
            payload:list,
        }
    }
    static GetUserAction = (user:any)=> {
        return {
            type: UserActionTypes.USER_GET,
            payload:user,
        }
    }    

    static REQUEST_DEVICE_LOG = ()=>{
        return{
            type:UserActionTypes.REQUEST_DEVICE_LOG,           
        }
    }
    static DeviceLogAction = (device:any)=> {
        return {
            type: UserActionTypes.DEVICE_LOG,
            payload:device,
        }
    }


    static REQUEST_DEVICE_LIST = () => {
        return {
            type:UserActionTypes.REQUEST_DEVICE_LIST
        }
    }

    static DeviceListAction = (device:any) => {
        return {
            type: UserActionTypes.DEVICE_LIST,
            payload: device,
        }
    }


    static REQUEST_USER_UPDATE = ()=>{
        return{
            type:UserActionTypes.REQUEST_USER_UPDATE,
           
        }
    }
    static UpdateUserAction = (user:any)=> {
        return{
            type:UserActionTypes.UPDATE_USER,
            payload:user
        }
    }
    
    static UpdateTimeAction = (data:any)=> {
        return{
            type:UserActionTypes.TIME_UPDATE,
            payload:data
        }
    }

    static RequestDeleteUser = ()=> {
        return{
            type:UserActionTypes.REQUEST_DELETE_USER,
           
        }
    }

    static DeleteUserAction = (id:number) => {
        return{
            type:UserActionTypes.DELETE_USER,
            payload:id
        }
    }

    static RequestDeleteDevice = () =>{
        return{
            type:UserActionTypes.REQUEST_DELETE_Device,
           
        }
    }
    static DeleteDeviceAction = (deleteUserData:object) => {
        return{
            type:UserActionTypes.DELETE_USER,
            payload:deleteUserData
        }
    }

    static REQUEST_TIME_UPDATE = ()=>{
        return{
            type:UserActionTypes.REQUEST_TIME_UPDATE,           
        }
    }


    static REQUEST_GET_TIME = ()=>{
        return{
            type:UserActionTypes.REQUEST_GET_TIME,
           
        }
    }

   static GetDefTimeAction = (data:any)=> {
        return{
            type:UserActionTypes.GET_TIME,
            payload:data
        }
    }
    





}