import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Outlet} from "react-router-dom";

export const Main = () => {

    return (
        <div className={'w-full bg-slate-950 flex flex-col items-center gap-y-20'}>
            <Header/>
            <main className={'w-[1040px]'}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};



