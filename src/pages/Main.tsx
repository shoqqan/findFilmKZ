import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../store/store";
import React from "react";

export const Main = () => {
    const loader = useSelector<AppStateType,boolean>(state => state.app.loader)
    console.log(loader)
    if (loader){
        console.log('lol')
    }
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



