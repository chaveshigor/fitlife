const initialState = {
    email: '',
    password: '',
    userType: '',
    token: '',
    latitude: '',
    longitude: ''
}

const authReducer = (state = [], action) => {

    if(action.type == 'editEmail'){
        return { ...state, email: action.payloads.email }
    }

    if(action.type == 'editPassword'){
        return { ...state, password: action.payloads.password}
    }
    
    if(action.type == 'getLocation'){
        return { ...state, 
        latitude: action.payloads.latitude, 
        longitude: action.payloads.longitude
        }
    }

    return state
}

export default authReducer