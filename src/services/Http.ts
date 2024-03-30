import _axios from 'axios'
import { getEnvVariable } from '../enviornment';
import { AsyncStorageService } from './AsyncStorageService';
export class Http{
    private static getToken = async()=>{
        const user:any = await AsyncStorageService.getUser();
        return user ? user.idToken:null;
    }

    private static getnewToken(){
        const user:any = AsyncStorageService.getUser();
        return user ? user.idToken:null;
    }

    
    private static axios = _axios.create({
        baseURL : getEnvVariable().laravel_base_api,
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+ Http.getnewToken()
            
        }
    });

    static async get(url:any,config?:any){
       
        try{
           
            
            const token = await Http.getToken();
            //console.log(token);
            //const newtoken = Http.getnewToken()
            //const latestUrl = token ? url+'?auth='+token:url;

            const config = {
                headers: {
                  'Content-Type': 'application/json', // Example header
                  'Authorization': 'Bearer '+token, // Example Authorization header
                  // Add more headers as needed
                }
              };
            //console.log(newtoken,'newtoken');
           const response = await Http.axios.get(url,config);
           //console.log(response,'newresponse');
           if(response){
                return response.data;
           }
        }catch(e){
            console.log(e,'newerror');
            Http.handleErrors(e);
            return Promise.reject(e);
        }
        
    }

    static async delete(url:any,config?:any){
        try{
            const token = await Http.getToken();
            //const newtoken = Http.getnewToken()
            const latestUrl = token ? url+'?auth='+token:url;
            //console.log(newtoken,'newtoken');
            console.log(url,'delete pai');
           const response = await Http.axios.delete(url,config);
           //console.log(response,'newresponse');
           if(response){
                return response.data;
           }
        }catch(e){
            console.log(e,'newerror');
            Http.handleErrors(e);
            return Promise.reject(e);
        }
    }

    static async post(url:any,body?:object, config?:any){
        try{
            const token = await Http.getToken();
            const latestUrl = token ? url+'?auth='+token:url;
            const response = await Http.axios.post(url,body,config);
            if(response){
                 return response.data;
            }
         }catch(e){
             Http.handleErrors(e);
             return Promise.reject(e);
         }
    }

    private static handleErrors(error:any){
        if(error.response){
            const message = error.response.data.message;
            const errorMessage = message ? message : 'Something went wrong, Please try again';
            //add toastr
        }else{
            //add toastr
        }
    }
}