import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import Home from "./pages/Home";
import {GenrePage} from "./pages/GenrePage";


export const App = () => {

    return (
        <div className={'w-screen h-screen bg-slate-950'}>
            <Routes>
                <Route path={'main'} element={<Main/>}>
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'genre-page/:genre'} element={<GenrePage/>}/>
                </Route>
                <Route path={'/'} element={<Navigate to={'main/home'}/>}/>
            </Routes>
        </div>
    )
}

