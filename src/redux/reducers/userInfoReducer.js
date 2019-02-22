const inicialState = {
    name: '',
    userType: '',
    genre: '',
    born: '',
    profilePic: ''
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
    
    
    return state
}

export default userInfoReducer