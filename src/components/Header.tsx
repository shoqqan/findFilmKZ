import React from 'react';
import {Search} from "./Search";
import {useNavigate} from "react-router-dom";
import {Logo} from "../assets/icons/Logo";

export const Header = () => {
    const navigate = useNavigate()
    const btnClass = 'w-24 h-8 flex justify-center items-center text-white cursor-pointer bg-purple-950 rounded-2xl md:hidden'

    return (
        <div className={'w-full h-15 bg-[#373737] flex justify-evenly items-center md:flex-col'}>
            <div className={'cursor-pointer md:mt-12'}
                 onClick={() => navigate('/main/home')}
            >
                <Logo/>
            </div>
            <div className={btnClass} onClick={() => navigate('genres-list')}>Genres</div>
            <Search/>
        </div>
    );
};

