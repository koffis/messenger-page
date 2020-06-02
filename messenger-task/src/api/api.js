import * as axios from "axios";

export const messageAPI = {
   getResponse(){
        return axios.get('https://api.chucknorris.io/jokes/random')
   },
   sendMessage(id, message){
       return axios.post('http://127.0.0.1:5000/send', {
           id: id,
           message: message
       })
   }
};

export const dialogAPI = {
    getDialog(id){
        return axios.get(`http://127.0.0.1:5000/${id}`)
    }
};

export const userAPI = {
    getUsers(){
        return axios.get('http://127.0.0.1:5000/users')
    },
    lastMessage(id, message, date, time){
        return axios.post('http://127.0.0.1:5000/last', {
            id: id,
            message:message,
            date: date,
            time: time
        })
    }
};

