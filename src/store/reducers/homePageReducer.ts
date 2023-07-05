import {Dispatch} from "redux";
import {moviesAPI} from "../../api/api";

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
}
type GetMoviesAT = {
    type:'GET-MOVIES'
    movies: Movie[]
}
type ActionTypes = GetMoviesAT
export const homePageInitState: HomePageType = {
    upcomingMovies: [] as Movie[]
}
export const homePageReducer = (state: HomePageType = homePageInitState, action: ActionTypes): HomePageType => {
    switch (action.type) {
        case "GET-MOVIES":{
            return {...state,upcomingMovies:action.movies}
        }
        default: {
            return state
        }
    }
}

export const getMoviesAC = (movies: Movie[]): GetMoviesAT => (
    {
        type: "GET-MOVIES" as const,
        movies
    }
)

export const getMoviesTC = () => async (dispatch:Dispatch) => {
try {
    const movies = await moviesAPI.getUpcoming()
    dispatch(getMoviesAC(movies))
}
catch (e) {
    console.log(e)
}
}