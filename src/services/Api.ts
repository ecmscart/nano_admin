import Axios from 'axios'
import { getEnvVariable } from '../enviornment';
import { UserActions } from '../Redux/Actions/UserAction';
import { Http } from './Http';
export class Api{
    static login(data:object){
        return Http.post(getEnvVariable().laravel_base_api+'user/signin',data,{baseURL:null});
    }
    static add(data:object){
        return Http.post('/users',data);
    }
    static get(){
        return Http.get('user/getUsers'+'?search=&start=0&length=10');
    }
    static getuser(id:number){
        return Http.get('user/getUser?user_id='+id);
    }

    static deleteUser(id:number){
        return Http.delete('user/deleteuser?user_id='+id);
    }

    static deleteDevice(deleteUserData:object){
        return Http.post('user/deleteLogs',deleteUserData);
    }

    static updateUser(user:any){
        console.log(user,'apidata');
        return Http.post('user/updateProfile',user);
    }    

    static getDevice(id:any){
        return Http.get('user/getSync?user_id='+id);
    }  
    
    
    static getDevices(id:any){        
        return Http.get('user/getDevices?user_id='+id);       
    }

    static updateTime(data:object){    
        return Http.post('user/updateTime',data);
    }

    static getTime(){
        return Http.get('user/getTime');
    }

    


}