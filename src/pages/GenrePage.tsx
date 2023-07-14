import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store/store";
import {getDramaMoviesTC, getRatingMoviesTC, Movie} from "../store/reducers/homePageReducer";
import {Pagination} from "../components/Pagination";
import {useParams} from "react-router-dom";


export const GenrePage= () => {
    const params = useParams()
    const genre =params.genre?.split('').map((el)=>(params.genre?.indexOf(el)===0?el.toUpperCase():el)).join('')
    const dispatch = useDispatch<any>()
    const [currentPage,setCurrentPage] = useState(1)
    const ratingMovies = useSelector<AppStateType, Movie[]>(state => state.homePage.ratingMovies)
    useEffect(() => {
        dispatch(getRatingMoviesTC(genre,currentPage))
    }, [])
    return (
        <div>
            <div className={'w-full flex justify-center text-2xl text-white mb-10'}>Top rated {genre}s</div>
            <div className={'flex flex-col gap-y-20'}>
                {ratingMovies.map((el) => {
                    return (
                        <div className={'flex gap-x-5'}>
                            <img className={'w-[300px] h-[200px]'} src={el.primaryImage.url}/>
                            <div className={'flex flex-col gap-y-10 text-white'}>
                                <div>Title: {el.originalTitleText.text}</div>
                                <div>Year: {el.releaseYear.year}</div>
                                <div>Release: {el.releaseDate.day}.{el.releaseDate.month}.{el.releaseDate.year}</div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <Pagination genre={genre} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={10}/>
        </div>
    );
}
    ;

