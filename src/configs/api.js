import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
    baseURL:'http://192.168.0.104:3333/'
});

api.interceptors.request.use( async(config) => {
    try{
        
        const token = await AsyncStorage.getItem('@token')
        
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        
        return config

    } catch(err){

    }
})

export default api;