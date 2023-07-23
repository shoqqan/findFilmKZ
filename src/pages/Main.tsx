import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Outlet} from "react-router-dom";
import React from "react";

export const Main = () => {
    return (
        <div
            className={'w-full bg-slate-950 flex flex-col items-center gap-y-20'}>
            <Header/>
            <main
                className={'w-9/12'}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};



