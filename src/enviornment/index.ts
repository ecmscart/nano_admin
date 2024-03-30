import { DevEnviornment } from "./dev.env";
import { ProdEnviornment } from "./prod.env";

export interface Enviornment{
    base_api_url :string;
    auth_url : string;
    laravel_base_api:string;
}
export function getEnvVariable():Enviornment{
    if (process.env.NODE_ENV !== 'production') {
        return DevEnviornment;
    }else{
        return ProdEnviornment;
    }
}