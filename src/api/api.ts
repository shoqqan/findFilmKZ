import axios from "axios";
import {GenresType} from "../store/reducers/homePageReducer";

const baseURL='https://moviesdatabase.p.rapidapi.com/'
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key":"40de909155mshbcd3fc2c14dc241p16c384jsn6fb38a771973",
        "X-RapidAPI-Host":"moviesdatabase.p.rapidapi.com"
    },
    params:{
        limit: 8
    }
})


export const moviesAPI = {
    getUpcoming:()=> instance.get('titles/x/upcoming').then(res=>res.data.results),
    getRatingsMovie:(page:number,genre?:GenresType)=> instance.get(`titles?list=top_rated_250${genre?`&genre=${genre}`:''}&page=${page}`).then(res=>res.data.results),
    getDrama:(page:number)=> instance.get(`titles?list=most_pop_movies&genre=Drama&page=${page}`).then(res=>res.data.results),

}

export const searchAPI = {
    getByKeyword: (title:string) => instance.get(`titles/search/keyword/${title}?page=1`).then(res=>res.data.results)
}