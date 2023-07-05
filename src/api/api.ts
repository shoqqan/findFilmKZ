import axios from "axios";

const baseURL='https://moviesdatabase.p.rapidapi.com/'
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key":"40de909155mshbcd3fc2c14dc241p16c384jsn6fb38a771973",
        "X-RapidAPI-Host":"moviesdatabase.p.rapidapi.com"
    },
    params:{
        "limit":8
    }
})


export const moviesAPI = {
    getUpcoming:()=> instance.get('titles/x/upcoming').then(res=>res.data.results)
}