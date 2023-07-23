import React from "react";
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";
import {GenresType, getRatingMoviesTC} from "../store/reducers/homePageReducer";
import {ArrowLeft} from "../assets/icons/ArrowLeft";
import {ArrowRight} from "../assets/icons/ArrowRight";

type PaginationPropsType = {
    genre: GenresType
    currentPage: number
    totalPages: number
    setCurrentPage: (currentPage: number) => void
}
export const Pagination: React.FC<PaginationPropsType> = ({genre, setCurrentPage, currentPage, totalPages}) => {
    const dispatch = useDispatch<any>()
    const handlePageClick = ({selected}) => {
        setCurrentPage(selected + 1);
        dispatch(getRatingMoviesTC(genre, selected + 1))
        window.scrollTo(0, 0)

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
              <ArrowLeft/>
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
      <ArrowRight/>


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
