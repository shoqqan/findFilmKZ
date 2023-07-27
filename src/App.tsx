import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import {GenrePage} from "./pages/GenrePage";
import {useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {GenresType} from "./store/reducers/homePageReducer";
import React from "react";
import {Home} from "./pages/Home";
import {GenresList} from "./pages/GenresList";
import {Circles} from "react-loader-spinner";
import {Contact} from "./pages/Contact";


export const App = () => {
    const genres = useSelector<AppStateType, GenresType[]>(state => state.homePage.genres)
    const loader = useSelector<AppStateType, boolean>(state => state.app.loader)
    return (
        <div className={'w-screen h-screen bg-slate-950 overflow-x-hidden'}>
            {loader &&
                <div className={'w-full h-full flex items-center justify-center'}>
                    <Circles
                        height="80"
                        width="80"
                        color="#3f1d69"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            }
            <Routes>
                <Route path={'main'} element={<Main/>}>
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'contact'} element={<Contact/>}/>
                    <Route path={'genres-list'} element={<GenresList/>}/>
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

