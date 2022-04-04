import axios from "axios";
const link = 'https://compaym.herokuapp.com/api/token'

async function login(user){
    return await axios.post(link, {
        "username": `${user.username}`,
        "password": `${user.password}`
    })
    .then(response =>{
        if(response.data.token){
            localStorage.setItem('user', response.data.token)
            window.location.replace('/profile')
        }
    })
}

export default login