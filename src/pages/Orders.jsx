import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from "../context/ShopContext.jsx";
import LazyLoad from "react-lazyload";
import axios from "axios";
import {assets} from "../assets/assets.js";


const Orders = () => {

    const {backendUrl, token, currency } = useContext(ShopContext)

    const today = new Date()
    const {delOption, setDelOption} = useContext(ShopContext)

    useEffect(() => {
        
    })
    const [orderData, setOrderData] = useState([])
    const [loading, setLoading] = useState(false)

    // fetching the orders

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null
            }
            setLoading(true)
            const response = await axios.post(backendUrl + '/api/order/userorders', {}, {headers: {token}})
          //  console.log(response.data) // getting order Data in console
            if (response.data.success) {
                let allOrdersItem = []
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrdersItem.push(item) // pushing data in our array
                    })
                })
               setOrderData(allOrdersItem.reverse()) // latest on the top
            }
         } catch (error) {
            console.log(error)

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        loadOrderData()
    }, [token])
    if (orderData.length === 0) {
        return <div className='w-100 text-center'>
            <svg className='mr-auto ml-auto mt-6 mb-6' width='40' height='40' xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
                <path fill='blue'
                      d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
            </svg>
            <h1 className='mt-20 mb-20 text-2xl '>У вас пока нету заказов</h1>
        </div>
    }

    return (
        <div className='border-t pt-16 mb-[200px]'>
            <div className='text-2xl'>
                <h1>Мои заказы</h1>
            </div>
            <>
                {loading ? (<div className='grid place-items-center min-h-[80vh]'>
                    <div
                        className='w-12 h-12 place-self-center border-4 border-gray-400 border-t-blue-700 rounded-full animate-spin '>

                    </div>
                </div>) : (<div>
                    {orderData.map((item, index) => (
                        <div key={index}
                             className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        <div className='flex items-start gap-6  text-sm'>
                    <LazyLoad>

                        <img className='w-36 sm:w-26' src={item.image[0]} alt=""/>

                    </LazyLoad>
                </div>
                <div className='w-50'>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-color text-gray-700'>
                        <b className='text-lg'>{item.price}{currency}</b>
                        <p>Количествo: 2</p>
                        {/* <p>Size: {item.size}</p>*/}
                    </div>
                    <p className='mt-2'>Дата: <span
                        className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                    <p className='mt-2'>Способ Оплаты: <span
                        className='text-gray-400'>{item.paymentMethod === 'COD' && 'При выдачи' }</span></p>

                </div>
                <div className='md:w-1/2 flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                        <p className='text-sm text-base'>{item.status}</p>
                    </div>
                </div>
                <button onClick={() => {
                    loadOrderData() // updating delivery status of product
                }} className='border px-4 py-2 text-sm font-medium rounded-lg'>Отслеживать доставку </button>
        </div>


    ))}

</div>)}


            </>
        </div>
    )
}
export default Orders
