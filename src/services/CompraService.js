export const comprarVuelo = async (id_persona, id_vuelo, fnBack) => {
    try {
        const data = {
            id_Persona: id_persona,
            id_Vuelo: id_vuelo,
            hora_Compra: new Date().toLocaleString()
        };
        const response = await axios.post('http://viajecitossa.somee.com/api/Compras', data);
        const informacion = response.data;
        if (informacion != null) {
            fnBack()
        }
    } catch (err) {
        console.log(err)
    }
}