

export class AsyncStorageService{
    private static readonly USER = 'user'; 
    static setUser(data:object){
        console.log(data, " data$$$")
       return localStorage.setItem(AsyncStorageService.USER, JSON.stringify(data));
    }

    static getUser(){
        let response:any =  localStorage.getItem(AsyncStorageService.USER);
        console.log(response,'response TT');
        response = JSON.parse(response);
        return response;
     }
     static clearUser(){
         return localStorage.removeItem(AsyncStorageService.USER);
     }
}