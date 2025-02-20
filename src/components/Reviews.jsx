import React, {useContext, useEffect, useState} from 'react'
import axios from "axios";
import {backendUrl} from "../../admin/src/App.jsx";
import {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/assets.js";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";

const Reviews = ({getReviewData, reviews}) => {

    const [amountOfReviews, setAmountOfReviews] = useState(null)
    const {changeReviews, setChangeReviews} = useContext(ShopContext)
    const [loading, setLoading] = useState(false)
      // Загружаем отзывы продукта ..


    useEffect( () => {
            getReviewData()
    }, []);
    // Функция для добавления нового отзыва


    useEffect(() => {

    }, [reviews])

    return (
        <div className='w-full overflow-x-auto'>
            <h3 className='text-2xl mt-4 text-center font-semibold'>
                Отзывы ({reviews.length})
            </h3>

            {loading ? (
                <div className='grid place-items-center min-h-[80vh]'>
                    <div
                        className='w-12 h-12 place-self-center border-4 border-gray-400 border-t-blue-700 rounded-full animate-spin '>

                    </div>
                </div>
            ) : <>

                {reviews.length > 0 ? (
                    <div className="overflow-x-auto">
                        <ul className='p-4 flex items-start gap-4 w-max'>
                            {reviews.reverse().map((review, index) => (
                                <li
                                    className='p-4 mb-4 rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer'
                                    style={{
                                        boxShadow: '1px 1px 2px gray',
                                        height: '140px',
                                        width: '360px',
                                        minWidth: '360px',
                                    }}
                                    key={index}
                                >
                                    <div className='flex items-center gap-2'>
                                        <img src={assets.user} className='w-6' alt=""/>
                                        <p><strong className='text-sm'>{review.author}</strong></p>
                                    </div>
                                    <p className='text-sm text-gray-700'>{review.content}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Отзывов пока нет.</p>
                )}

            </> }


        </div>
    )
}
export default Reviews
