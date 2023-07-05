import {Header} from "../components/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMoviesTC, Movie} from "../store/reducers/homePageReducer";
import {AppStateType} from "../store/store";
import {Footer} from "../components/Footer";
import {FilmsList} from "../components/FilmsList";

export const Home = () => {
    const upcomingMovies = useSelector<AppStateType, Movie[]>(state => state.homePage.upcomingMovies)
    console.log(upcomingMovies)
    const dispatch = useDispatch<any>()
    useEffect(() => {
        dispatch(getMoviesTC())
    }, [])
    return (
        <div className={'w-full h-full bg-slate-950 flex flex-col justify-between'}>
            <Header/>
            <FilmsList title={'Скоро в прокате'} movies={upcomingMovies}/>

            <Footer/>
        </div>
    );
};



