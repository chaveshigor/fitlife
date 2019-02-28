import axios from '../configs/api';

class api {

    async teste(latitude, longitude, distance) {
        //console.log(latitude)
        const {data} = await axios.post('/', {
            latitude: latitude,
            longitude: longitude, 
            distance: distance
        })
        return data
    }
////////////////////////////////////////////////////////////////////
    async loginPersonal(email, password, latitude, longitude) {
        const response = await axios.post('session/loginpersonal', {
            email: email,
            password: password,
            latitude: latitude,
            longitude: longitude
        })
        const { data: { token } } = response
        //const { type, token } = data
        return token
    }
//////////////////////////////////////////////////////////////////////////
    async loginClient(email, password, latitude, longitude) {
        const response = await axios.post('session/client', {
            email: email,
            password: password,
            latitude: latitude,
            longitude: longitude
        })
        const { data: { token } } = response
        //const { type, token } = data
        return token
    }
///////////////////////////////////////////////////////////////////////////
    async showPersonalNearby(latitude, longitude, distance) {
        const { data } = await axios.post('p', {
            headers: {
                'Content-Type': 'application/json'
            },
            latitude: latitude,
            longitude: longitude,
            distance: distance
        })
        //console.log(data)
        return data
    }
//////////////////////////////////////////////////////////////////////////
    async newClient(name, email, password, born, genre, latitude, longitude) {
        await axios.post('client', {
            name,
            email,
            password,
            born,
            genre,
            latitude,
            longitude
        })
        //FAZER O LOGIN DO NOVO USUARIO E RETORNAR UM TOKEN

    }
////////////////////////////////////////////////////////////////////////////////
    async newPersonal(name, email, password, born, genre, latitude, longitude) {
        await axios.post('client', {
            name,
            email,
            password,
            born,
            genre,
            latitude,
            longitude
        })    
    }
    //FAZER O LOGIN DO NOVO USUARIO E RETORNAR UM TOKEN
    //async get
}

export default new api()