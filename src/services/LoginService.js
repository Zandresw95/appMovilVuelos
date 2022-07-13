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
    // const URL = baseUrl + "Personas/login";
    

    /*axios
        .post(URL, data)
        .then((response) => {
            let result = response.data;
            console.log(result);
            return result;
            /* if (result) {
                 
                 setModalVisibleError(false);
                 // setModalVisible(true);
             } else {
                 setIsLoading(false);
                 // console.log("no se pudo crear el registro");
                 setMessageError("ERROR AL REGISTRAR EL EMAIL");
                 setModalVisibleError(true);
             }
            // sendCodeEmailfn();
        })
        .catch((error) => {
            /*setIsLoading(false);
            setMessageError("ERROR AL REGISTRAR EL EMAIL");
            setModalVisibleError(true);
            console.log(error)
        });*/
};