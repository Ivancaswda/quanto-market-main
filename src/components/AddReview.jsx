import React, {useContext, useState} from 'react';
import axios from "axios";
import {backendUrl} from "../../admin/src/App.jsx";
import {ShopContext} from "../context/ShopContext.jsx";
import reviews from "./Reviews.jsx";
import {assets} from "../assets/assets.js";
import {toast} from "react-toastify";

const AddReview = ({ productId, onReviewAdded, reviews, getReviewData }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const {getDataFeedbacks, changeReviews, setChangeReviews} = useContext(ShopContext)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (event) => {



        event.preventDefault();
        console.log(productId)


        try {
            setLoading(true)
            const response = await axios.post(backendUrl + '/api/reviews/post', { author, content, productId });

            if (response.data.success) {


                getReviewData()
                setAuthor('');
                setContent('');
                toast.success('Отзыв был успешно добавлен!')

            } else {
                console.error('Ошибка при отправке отзыва');
            }
        } catch (error) {
            console.error('Ошибка при отправке отзыва:', error);
        } finally {
            setLoading(false)

        }


    };

    return (
        <>
            { !loading ? (
                    <form className='flex-col flex gap-2 px-4 w-[450px] ' onSubmit={handleSubmit}>

                        <div className='flex flex-col gap-1'>
                            <div>

                                <label className='text-md font-semibold' htmlFor="author">Ваше имя:</label>

                            </div>
                            <input placeholder='Укажите ваше имя' className='py-2 px-2 rounded-lg hover:border-blue-700'
                                   type="text"
                                   id="author"
                                   value={author}
                                   onChange={(e) => setAuthor(e.target.value)}
                                   required={true}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-md font-semibold' htmlFor="content">Отзыв:</label>
                            <textarea className='border border-blue-700 p-2 hover:border-blue-700'
                                      placeholder='Напишите что думаете об этом товаре...'
                                      id="content"
                                      value={content}
                                      onChange={(e) => setContent(e.target.value)}
                                      required={true}
                            />
                        </div>
                        <button className='text-center mt-2 py-2 px-4 bg-blue-700  rounded-lg text-white font-semibold'
                                type="submit">Отправить отзыв
                        </button>

                    </form>
                ) : (
                <div className='grid place-items-center min-h-[80vh]'>
                    <div
                        className='w-12 h-12 place-self-center border-4 border-gray-400 border-t-blue-700 rounded-full animate-spin '>

                    </div>
                </div>
            )
            }

        </>

    )
};

export default AddReview;