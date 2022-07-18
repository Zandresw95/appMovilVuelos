import axios from "axios";
import { baseUrl } from "../commons/Constants";
export const  LoginService = async (email,password,fnSetter,fnLogin)  => {
    const URL = baseUrl + "Personas/login";

    const data = {
        email: email,
        password: password
    };
    try{
        const response = await axios.post(URL, data);
        const info = await response.data;
        const status = response.status;
        console.log(response)
        if(status== 500){
            console.log("entre negativo", info)
            fnLogin(false);
            fnSetter(true);
            return info;
        }else{
            console.log("entre positivo", info)
            fnLogin(false);
            fnSetter(false);
            return info;
        }
    }catch(err){
        console.log(err)
        fnLogin(false);
        fnSetter(true);
    }

};