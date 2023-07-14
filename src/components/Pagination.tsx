import React from "react";
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";
import {GenresType, getDramaMoviesTC, getRatingMoviesTC} from "../store/reducers/homePageReducer";
import ArrowRight from '../assets/icons/arrow-right.svg'
import ArrowLeft from '../assets/icons/arrow-left.svg'

type PaginationPropsType = {
    genre:GenresType
    currentPage: number
    totalPages: number
    setCurrentPage: (currentPage: number) => void
}
export const Pagination: React.FC<PaginationPropsType> = ({genre,setCurrentPage, currentPage, totalPages}) => {
    const dispatch = useDispatch<any>()
    const handlePageClick = ({selected}) => {
        setCurrentPage(selected + 1);
        dispatch(getRatingMoviesTC(genre,selected + 1))
        window.scrollTo(0, 0)
    };
    const paginationVariants = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
            },
        },
    };
    const showNextButton = currentPage !== totalPages - 1;
    const showPrevButton = currentPage !== 0;
    return (
        <div>
            <ReactPaginate
                breakLabel={<span className="mr-4 text-white">...</span>}
                nextLabel={
                    showNextButton ? (
                        <span
                            className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md hover:bg-[#111827]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
                        </span>
                    ) : null
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={totalPages}
                previousLabel={
                    showPrevButton ? (
                        <span
                            className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md mr-4 hover:bg-[#111827]">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
</svg>


            </span>
                    ) : null
                }
                containerClassName="flex items-center justify-center mt-8 mb-4"
                pageClassName="block text-white border-solid border-lightGray hover:bg-[#111827] w-10 h-10 flex items-center justify-center rounded-md mr-4 text-white"
                activeClassName="bg-[purple] text-white"
            />
        </div>
    );
}
