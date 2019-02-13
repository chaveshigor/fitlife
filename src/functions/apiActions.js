import axios from '../configs/api';

class api {
    async loginPersonal(email, password, latitude, longitude) {
        const response = await axios.post('session/loginpersonal', {
            email: email,
            password: password,
            latitude: latitude,
            longitude: longitude
        })
        const { data } = response
        const { type, token } = data
        return token
    }

    async loginClient(email, password, latitude, longitude) {
        const response = await axios.post('userclient/login', {
            email: email,
            password: password,
            latitude: latitude,
            longitude: longitude
        })
        const { data } = response
        const { type, token } = data
        return token
    }

    async showNearBy(latitude, longitude) {
        const { data } = await axios.post('users/shownearby', {
            latitude: latitude,
            longitude: longitude
        })
        return data
    }
}

export default new api()