import React, {useEffect} from 'react';
import {FilmsList} from "../components/FilmsList";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store/store";
import {
    getDramaMoviesTC,
    getTopRatedMoviesTC,
    getUpcomingMoviesTC,
    Movie
} from "../store/reducers/homePageReducer";

const Home = () => {
    const upcomingMovies = useSelector<AppStateType, Movie[]>(state => state.homePage.upcomingMovies)
    const dramaMovies = useSelector<AppStateType, Movie[]>(state => state.homePage.topDramasMovies)
    const topRatedMovies = useSelector<AppStateType, Movie[]>(state => state.homePage.topRatedMovies)
    const dispatch = useDispatch<any>()
    useEffect(() => {
        dispatch(getUpcomingMoviesTC())
        dispatch(getDramaMoviesTC())
        dispatch(getTopRatedMoviesTC())
    }, [])
    return (
        <div className={'flex flex-col gap-y-20'}>
            <FilmsList title={'Скоро в прокате'} movies={upcomingMovies}/>
            <FilmsList title={'Топ драм 2023'} movies={dramaMovies} withArrow/>
            <FilmsList title={'Топ 250 по версии FindFilmKZ'} movies={topRatedMovies} withArrow/>
        </div>
    );
};

export default Home;