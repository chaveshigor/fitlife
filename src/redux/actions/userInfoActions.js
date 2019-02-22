export const getName = name => ({
    type: 'getName',
    payloads: {
        name: name
    }
})

export const getUserType = type => ({
    type: 'getUserType',
    payloads: {
        userType: type
    }
})

export const getGenre = genre => ({
    type: 'getGenre',
    payloads: {
        genre: genre
    }
})

export const getBorn = date => ({
    type: 'getBorn',
    payloads: {
        born: date
    }
})
