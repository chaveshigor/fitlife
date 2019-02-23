const inicialState = {
    name: '',
    userType: '',
    genre: '',
    born: '',
    profilePic: '',
    locationRadius: 10,
    creditCard: '',

}

const userInfoReducer = (state=[], action) => {

    if(action.type == 'getName'){
        return { ...state, name: action.payloads.name }
    }

    if(action.type == 'getUserType'){
        return { ...state, userType: action.payloads.userType }
    }

    if(action.type === 'getGenre'){
        return { ...state, genre: action.payloads.genre }
    }

    if(action.type == 'getBorn'){
        return { ...state, born: action.payloads.born}
    }

    if(action.type == 'getlocationRadius'){
        return { ...state, locationRadius:action.payloads.locationRadius }
    }
    
    
    return state
}

export default userInfoReducer