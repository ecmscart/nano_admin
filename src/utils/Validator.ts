import * as Yup from 'yup';
export class Validators{
    public static registration(){
        return Yup.object({
            name:Yup.string().max(15,'must be 15 character or less').required('required'),
            email:Yup.string().email('invalid email address').required('required'),
            password:Yup.string().max(6,'password must be 6 character').required('required'),
        })
    }
    public static login(){
        return Yup.object({
            email:Yup.string().email('invalid email address').required('Please enter email address'),
            password:Yup.string().max(8,'password must be 6 character').required('Please enter password'),
        })
    }

    public static update(){
        return Yup.object({
            username:Yup.string().required('Please Enter Username'),
            email:Yup.string().email('invalid Email Address').required('Please enter email address'),
            deviceId:Yup.string().required('Please enter DeviceId'),
        })
    }

}