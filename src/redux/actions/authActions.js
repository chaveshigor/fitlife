export const editEmail = email => ({
    type: 'editEmail',
    payloads: {
        email: email
    }
})

export const editPassword = password => ({
    type: 'editPassword',
    payloads: {
        password: password
    }
})

export const getLocation = (latitude, longitude) => ({
    type: 'getLocation',
    payloads: {
        latitude: latitude,
        longitude: longitude
    }
})

