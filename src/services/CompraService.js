import axios from "axios";
import { baseUrl } from "../commons/Constants";
export const comprarVuelo = async (id_persona, id_vuelo) => {
    const URL = baseUrl + "Compras";
    const data = {
        id_Persona: id_persona,
        id_Vuelo: id_vuelo,
    };
    try {
        const response = await axios.post(URL, data);
        const informacion = response.data;
        if (informacion != null) {
            console.log("REGISTRO OK, DE COMPRA")
            return true;
        }
    } catch (err) {
        console.log(err)
    }
}