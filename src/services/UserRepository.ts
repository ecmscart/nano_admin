import { AsyncLocalStorage } from "async_hooks";
import { UserActions, UserActionTypes } from "../Redux/Actions/UserAction"
import { Api } from "./Api";
import { AsyncStorageService } from "./AsyncStorageService";

export class UserRepositry{
    static add(data:{name:string,email:string,password:string}){
        return async (dispatch:any) =>{
            try{
                const id = await Api.add(data);
                const userData = {...data,id:id.name}
                dispatch(UserActions.AddUserAction(userData));
                return userData;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }
    static getUser(){
        return async (dispatch:any) =>{
            try{
                dispatch(UserActions.REQUEST_USER_LIST());
                const user:any = await Api.get();
                //console.log(user,'userrepository');
                //let user:any = [];
                // for(let key in data){
                //     console.log(key,'datakey');
                //     user.push({...data[key],id:key});
                // }
                //console.log(user,'userlist');
                dispatch(UserActions.ListUserAction(user));
                return user;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }
    static getUserData(id:any){
        return async (dispatch:any) =>{
            try{
                console.log(id);
                //dispatch(UserActions.REQUEST_USER_LIST());
                const user:any = await Api.getuser(id);
                //console.log(user,'userrepository');
                //let user:any = [];
                // for(let key in data){
                //     console.log(key,'datakey');
                //     user.push({...data[key],id:key});
                // }
                console.log(user,'user single');
                dispatch(UserActions.GetUserAction(user));
                return user;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }

    static deleteUser(id:any){
        return async (dispatch:any) =>{
            try{
                dispatch(UserActions.RequestDeleteUser);           
                const user:any = await Api.deleteUser(id);              
                //console.log(user,'user single');
                dispatch(UserActions.DeleteUserAction(id));
                return user;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }

    static deleteDevice(deleteUserData:object){
        return async (dispatch:any) =>{
            try{
                dispatch(UserActions.RequestDeleteDevice);           
                const user:any = await Api.deleteDevice(deleteUserData);              
                //console.log(user,'user single');
                dispatch(UserActions.DeleteDeviceAction(deleteUserData));
                return user;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }

    static updateUser(user:any){
        return async (dispatch:any) =>{
            try{
                dispatch(UserActions.REQUEST_USER_UPDATE());            
                const userdata:any = await Api.updateUser(user);              
                //console.log(user,'user single');
                dispatch(UserActions.UpdateUserAction(userdata));
                return user;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }

    static getDeviceLog(id:any){
        return async (dispatch:any) =>{
            try{
                dispatch(UserActions.REQUEST_DEVICE_LOG());
                const devicelog:any = await Api.getDevice(id);
                //console.log(user,'userrepository');
                //let user:any = [];
                // for(let key in data){
                //     console.log(key,'datakey');
                //     user.push({...data[key],id:key});
                // }
                //console.log(user,'userlist');
                dispatch(UserActions.DeviceLogAction(devicelog));
                return devicelog;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }


    static getDeviceList(id:any){
        return async(dispatch:any)=>{
            try{
                    dispatch(UserActions.REQUEST_DEVICE_LIST());
                    const devicelistitem:any = await Api.getDevices(id);
                    dispatch(UserActions.DeviceListAction(devicelistitem))
                    return devicelistitem;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }


    
    static updateTime(time:any){
        return async (dispatch:any) =>{
            try{
                dispatch(UserActions.REQUEST_TIME_UPDATE());            
                const updatedata:any = await Api.updateTime(time);              
                console.log(updatedata,'updatedata');
                dispatch(UserActions.UpdateTimeAction(updatedata));
                return updatedata;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }

    static getTime(){
        return async (dispatch:any) =>{
            try{
                dispatch(UserActions.REQUEST_GET_TIME());
                const time:any = await Api.getTime();                    
                dispatch(UserActions.GetDefTimeAction(time));
                return time;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }



}