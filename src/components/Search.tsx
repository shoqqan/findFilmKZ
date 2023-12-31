import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {getMoviesBySearch} from "../store/reducers/homePageReducer";
import {useDispatch} from "react-redux";

export const Search = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState<string>('')
    const dispatch = useDispatch<any>()
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <form className={'w-96 md:fixed top-1.5'}>
            <label htmlFor="default-search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search"
                       value={title}
                       onChange={onChangeInput}
                       className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-purple-800 focus:bg-purple-800 focus:border-blue-500 dark:bg-purple-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-purple-800 dark:focus:border-blue-500"
                       placeholder="Введите название фильма" required/>
                <button type="submit"
                        onClick={()=>{
                            navigate(`search/${title}`)
                            dispatch(getMoviesBySearch(title))
                        }}
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Найти
                </button>
            </div>
        </form>
    );
}


