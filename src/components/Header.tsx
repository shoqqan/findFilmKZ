import React from 'react';
import {Search} from "./Search";
import {Outlet} from "react-router-dom";

export const Header = () => {
    return (
        <div className={'w-full h-15 bg-[#373737] flex justify-evenly items-center'}>
            <div className={'text-white'}>FindFilmKZ</div>
            <Search/>
        </div>
    );
};

