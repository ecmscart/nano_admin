import { AsyncLocalStorage } from "async_hooks";
import { UserActions } from "../Redux/Actions/UserAction"
import { Api } from "./Api";
import { AsyncStorageService } from "./AsyncStorageService";

export class AuthRepositry{
    static login(data:{email:string,password:string,returnSecureToken:true}){
        return async (dispatch:any) =>{
            try{
                dispatch(UserActions.LoginRequestAction());
                const userdata = await Api.login(data);
                console.log(userdata.token, "test user ");
                dispatch(UserActions.LoginRequestSuccesAction(userdata.user));
                await AsyncStorageService.setUser({email:userdata.user.email,idToken:userdata.token,userName:userdata.user.username,userId:userdata.user.id});
                return userdata.user;
            }catch(e){
                dispatch(UserActions.UserErrorOccured());
                console.log(e,'user error');
                return Promise.reject(e);
            }
        }
    }

    static userAuthUpdate(user:any){
        return async (dispatch:any) =>{
            try{
                dispatch(UserActions.UserAuthUpdateAction(user));
              return;  
            }catch(e){
                return Promise.reject(e);
            }
        }
    }

    static logout(){
        return async (dispatch:any) =>{
            AsyncStorageService.clearUser();
            dispatch(UserActions.UserLogoutAction());
            return;
        }
    }

}