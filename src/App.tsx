import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import Home from "./pages/Home";
import {GenrePage} from "./pages/GenrePage";
import {useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {GenresType} from "./store/reducers/homePageReducer";
import {MutatingDots} from "react-loader-spinner";
import React from "react";


export const App = () => {
    const genres = useSelector<AppStateType, GenresType[]>(state => state.homePage.genres)
    // console.log(loader)
    return (

        <div className={'w-screen h-screen bg-slate-950 overflow-x-hidden'}>
            <Routes>
                <Route path={'main'} element={<Main/>}>
                    <Route path={'home'} element={<Home/>}/>
                    {genres.map((el) => {
                        return (
                            <Route key={el} path={`genre-page/${el.toLowerCase()}`}
                                   element={<GenrePage genre={el} title={el}/>}/>
                        )
                    })}
                    <Route path={'search/:title'} element={<GenrePage title={'Searched movies'} search/>}/>
                    <Route path={'genre-page/top-rated'} element={<GenrePage genre={'Drama'} title={'Drama'}/>}/>
                </Route>
                <Route path={'/'} element={<Navigate to={'main/home'}/>}/>
                <Route path={'*'} element={<div className={'text-white'}>Not found</div>}/>

            </Routes>
        </div>
    )
}

