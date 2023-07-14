import {Dispatch} from "redux";
import {moviesAPI} from "../../api/api";

export type GenresType =
    "Action"|
    "Adult"|
    "Adventure"|
    "Animation"|
    "Biography"|
    "Comedy"|
    "Crime"|
    "Documentary"|
    "Drama"|
    "Family"|
    "Fantasy"|
    "Film-Noir"|
    "Game-Show"|
    "History"|
    "Horror"|
    "Music"|
    "Musical"|
    "Mystery"|
    "News"|
    "Reality-TV"|
    "Romance"|
    "Sci-Fi"|
    "Short"|
    "Sport"|
    "Talk-Show"|
    "Thriller"|
    "War"|
    "Western"

interface PrimaryImage {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
        plainText: string;
        __typename: string;
    };
    __typename: string;
}

interface DisplayableTitleTypeProperty {
    value: {
        plainText: string;
        __typename: string;
    };
    __typename: string;
}

interface TitleTypeCategory {
    value: string;
    __typename: string;
}

interface TitleType {
    displayableProperty: DisplayableTitleTypeProperty;
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
    categories: TitleTypeCategory[];
    canHaveEpisodes: boolean;
    __typename: string;
}

interface TitleText {
    text: string;
    __typename: string;
}

interface YearRange {
    year: number;
    endYear: number | null;
    __typename: string;
}

interface ReleaseDate {
    day: number;
    month: number;
    year: number;
    __typename: string;
}

export interface Movie {
    _id: string;
    id: string;
    primaryImage: PrimaryImage;
    titleType: TitleType;
    titleText: TitleText;
    originalTitleText: TitleText;
    releaseYear: YearRange;
    releaseDate: ReleaseDate;
}

export type HomePageType = {
    upcomingMovies: Movie[]
    topDramasMovies: Movie[]
    topRatedMovies: Movie[]
    ratingMovies: Movie[]
}
type GetUpcomingMoviesAT = {
    type:'GET-UPCOMING-MOVIES'
    movies: Movie[]
}
type GetDramaMoviesAT = {
    type:'GET-DRAMA-MOVIES'
    movies: Movie[]
}
type GetTopRatedMoviesAT = {
    type:'GET-TOP-RATED-MOVIES'
    movies: Movie[]
}
type GetRatingMoviesAT = {
    type:'GET-RATING-MOVIES'
    movies: Movie[]
}
type ActionTypes =  | GetUpcomingMoviesAT
                    | GetDramaMoviesAT
                    | GetTopRatedMoviesAT
                    | GetRatingMoviesAT
export const homePageInitState: HomePageType = {
    upcomingMovies: [] as Movie[],
    topDramasMovies: [] as Movie[],
    topRatedMovies: [] as Movie[],
    ratingMovies: [] as Movie[]
}
export const homePageReducer = (state: HomePageType = homePageInitState, action: ActionTypes): HomePageType => {
    switch (action.type) {
        case "GET-UPCOMING-MOVIES":{
            return {...state,upcomingMovies:action.movies}
        }
        case "GET-DRAMA-MOVIES":{
            return {...state,topDramasMovies:action.movies}
        }
        case "GET-TOP-RATED-MOVIES":{
            return {...state, topRatedMovies:action.movies}
        }
        case "GET-RATING-MOVIES":{
            return {...state, ratingMovies:action.movies}

        }
        default: {
            return state
        }
    }
}

export const getUpcomingMoviesAC = (movies: Movie[]): GetUpcomingMoviesAT => (
    {
        type: "GET-UPCOMING-MOVIES" as const,
        movies
    }
)
export const getTopRatedMoviesAC = (movies: Movie[]): GetTopRatedMoviesAT => (
    {
        type: "GET-TOP-RATED-MOVIES" as const,
        movies
    }
)

export const getRatingMoviesAC = (movies: Movie[]): GetRatingMoviesAT => (
    {
        type: "GET-RATING-MOVIES" as const,
        movies
    }
)


export const getDramaMoviesAC = (movies: Movie[]): GetDramaMoviesAT => (
    {
        type: "GET-DRAMA-MOVIES" as const,
        movies
    }
)


export const getUpcomingMoviesTC = () => async (dispatch:Dispatch) => {
try {
    const movies = await moviesAPI.getUpcoming()
    dispatch(getUpcomingMoviesAC(movies))
}
catch (e) {
    alert(e)
}
}

export const getDramaMoviesTC = (page?:number) => async (dispatch:Dispatch) => {
    try {
        const movies = await moviesAPI.getDrama(page?page:1)
        dispatch(getDramaMoviesAC(movies))
    }
    catch (e) {
        alert(e)
    }
}

export const getRatingMoviesTC = (genres:GenresType, page?:number) => async (dispatch:Dispatch) => {
    try {
        const movies = await moviesAPI.getRatingsMovie(page?page:1, genres)
        dispatch(getRatingMoviesAC(movies))
    }
    catch (e) {
        alert(e)
    }
}

export const getTopRatedMoviesTC = (page?:number) => async (dispatch:Dispatch) => {
    try {
        const movies = await moviesAPI.getTopRated(page?page:1)
        dispatch(getTopRatedMoviesAC(movies))
    }
    catch (e) {
        alert(e)
    }
}