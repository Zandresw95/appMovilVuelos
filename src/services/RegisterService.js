import axios from "axios";
import { baseUrl } from "../commons/Constants";
export const RegisterService = async (
    name,
    lastName,
    email,
    pasaporte,
    password,
    functionFn,
    setVisible
) => {
    const URL = baseUrl + "Personas";
    const data = {
        nombres: name,
        apellidos: lastName,
        email: email,
        pasaporte: pasaporte,
        password: password
    };

    try {
        const response = await axios.post(URL, data);
        if(response!=null){
            setVisible()
            functionFn()
        }
    } catch (err) {
        console.log(err)
    }
    
};