import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store/store";
import {
    GenresType,
    getDramaMoviesTC,
    getMoviesBySearch,
    getRatingMoviesTC,
    Movie
} from "../store/reducers/homePageReducer";
import {Pagination} from "../components/Pagination";
import {useNavigate, useParams} from "react-router-dom";

type GenrePagePropsType = {
    title: string
    genre?: GenresType
    search?: boolean
}
export const GenrePage: React.FC<GenrePagePropsType> = ({search, title, genre}) => {
        const params = useParams()
        const dispatch = useDispatch<any>()
        const [currentPage, setCurrentPage] = useState(1)
        const ratingMovies = useSelector<AppStateType, Movie[]>(state => state.homePage.ratingMovies)
        const navigate = useNavigate()
        const btnClass = 'w-24 h-8 flex justify-center items-center text-white cursor-pointer bg-purple-950 rounded-2xl'
        useEffect(() => {
            search ?
                dispatch(getMoviesBySearch(params.title!))
                :
                dispatch(getRatingMoviesTC(genre ? genre : 'Drama', currentPage))

        }, [])
        return (
            <div>
                <div className={'hidden md:block w-full'}>
                    <div className={btnClass} onClick={() => navigate('/main/home')}>Home</div>
                </div>
                <div
                    className={'w-full flex justify-center text-2xl text-white mb-10'}>{`${search ? '' : 'Top rated'} ${title}:`}</div>
                {ratingMovies.length>0?
                    <div className={'flex flex-col gap-y-20'}>

                        {ratingMovies.map((el) => {
                            return (
                                <div key={el._id} className={'flex gap-x-5'}>
                                    <img className={'w-72 h-48'} src={el.primaryImage?.url}/>
                                    <div className={'flex flex-col gap-y-10 text-white'}>
                                        <div>Title: {el.originalTitleText.text}</div>
                                        <div>Year: {el.releaseYear?.year}</div>
                                        <div>Release: {el.releaseDate?.day}.{el.releaseDate?.month}.{el.releaseDate?.year}</div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    :
                    <div className={'text-white'}>Coming soon...</div>
                }

                {!search ?
                    <Pagination genre={genre!} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={10}/>
                    :
                    <></>
                }
            </div>
        );
    }
;

