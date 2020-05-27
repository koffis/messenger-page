import * as axios from "axios";

export const messageAPI = {
   getResponse(){
        return axios.get('https://api.chucknorris.io/jokes/random')
   }
};