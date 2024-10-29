import axios from "axios";

const HttpService = axios.create({
  baseURL: "http://stranger-things-api.fly.dev/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});

export const ShowCharacters = async () => {
   return await HttpService.get('characters/random?count=60');
 
};

export default HttpService;