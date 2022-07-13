import axios from "axios";

export const GetVuelos = async () => {
    try {
        const response = await axios.get('http://viajecitossa.somee.com/api/Vuelos');
        const data = response.data;
        return data;
        //setFunc(await response.data)
    } catch (err) {
        console.log(err)
    }

};