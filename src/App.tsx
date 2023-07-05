import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";

export const App = () => {
    return (
        <div className={'w-screen h-screen relative'}>
            <Routes>
                <Route path={'home'} element={<Home/>}></Route>
                <Route path={'/'} element={<Navigate to={'/home'}/>}></Route>
            </Routes>
        </div>
    )
}

