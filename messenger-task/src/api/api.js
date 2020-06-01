import * as axios from "axios";

export const messageAPI = {
   getResponse(){
        return axios.get('https://api.chucknorris.io/jokes/random')
   }
};

export const dialogAPI = {
    getDialog(id){
        return axios.get(`http://127.0.0.1:5000/${id}`)
    }
};