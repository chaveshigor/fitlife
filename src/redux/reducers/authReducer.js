const initialState = {
    email: '',
    password: '',
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

    if(action.type == 'getUserType'){
        return { ...state, userType: action.payloads.userType }
    }

    if(action.type == 'getToken'){
        return { ...state, token: action.payloads.token }
    }

    return state
}

export default authReducer