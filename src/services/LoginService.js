import axios from "axios";
import { baseUrl } from "../commons/Constants";
export const  LoginService = async (email,password)  => {
    const URL = baseUrl + "Personas/login";

    const data = {
        email: email,
        password: password
    };
    try{
        const response = await axios.post(URL, data);
        return await response.data;
    }catch(err){
        console.log(err)
    }

};