import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../store/store";
import {GenresType} from "../store/reducers/homePageReducer";
import {useNavigate} from "react-router-dom";

export const GenresList = () => {
    const genres = useSelector<AppStateType, GenresType[]>(state => state.homePage.genres)
    const navigate = useNavigate()
    return (
        <div className={'flex flex-wrap justify-evenly gap-x-20 gap-y-5'}>
            {
                genres.map((el) => {
                    return (
                        <div className={'w-52 h-24 flex items-center justify-center bg-gray-900 border-2 border-purple-800 text-white rounded-2xl transition hover:bg-gray-700 ease-in'}
                            onClick={()=>navigate(`/main/genre-page/${el.toLowerCase()}`)}
                        >
                            {el}
                        </div>
                    )
                })
            }
        </div>

    );
};

