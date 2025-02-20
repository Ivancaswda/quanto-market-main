
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Modal from "./components/Modal/Modal.jsx";
import NewsletterBox from "./components/NewsletterBox/NewsletterBox.jsx";
import {useContext, useEffect, useState} from "react";
import {ShopContext} from "./context/ShopContext.jsx";
import Collection from "./pages/Collection.jsx";
import {toast, ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from "./pages/ResetPassword.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Orders from "./pages/Orders.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import {assets} from "./assets/assets.js";
function App() {

    let {showModal, setShowModal} = useContext(ShopContext)
    let [scrollPass, setScrollPass] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() =>  {
        // Define the scroll threshold
        const scrollThreshold = 2800;

        // Event handler for scroll event
        const handleScroll = () => {
            // Get the scroll position
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            // Check if the scroll position is greater than the threshold and if we haven't already shown the notification
            if (scrollPosition > scrollThreshold && !scrollPass) {
                setShowModal(true); // Show the notification
                setScrollPass(true); // Mark that we've shown the notification
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPass]);

    const [isBlocked, setIsBlocked] = useState(false)
    useEffect(() => {
        const fetchGeolocation = async () => {

            try {
                setLoading(true)
                const response = await fetch('https://ipapi.co/json/') // api discover ip of user
                const data = await response.json()
                // returns contries
                if (data.country !== 'RU' ) {
                    setIsBlocked(true)
                }

            } catch (error) {
                return (
                    <div>
                        Не удалось зайти на сайт
                    </div>
                )
            } finally {
                setLoading(false)
            }
        }

        fetchGeolocation()
    }, [])


    return isBlocked ? (<div className='h-[100vh] w-100 '>
        <div id='id'>
            <div style={{position: 'absolute', zIndex: '100',}}
                 className='w-full h-80 text-center flex flex-col items-center justify-center '>
                <img className='w-20 rounded-full'
                     src='https://pic.rutubelist.ru/user/c7/4a/c74af2bde05d669270019bc350a4252c.jpg' alt=""/>
                <h1 className='font-semibold text-3xl mt-10 text-gray-400 '>К сожалению на данный момент <span
                    className='text-blue-600'>quantShop</span> недоступен в вашем текущем <span
                    className='text-green-400'>регионе</span></h1>
            </div>
            <div id='inject'>

            </div>

        </div>
        <svg id='animate' className='absolute mr-[62%] ml-[50%]' width='34' height='34'
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 384 512">
            <path fill='black'
                  d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
        <div className='flex items-center justify-center flex-col gap-10 mt-[100px] mb-20'>

            <h1 className='text-2xl '>Почему так?</h1>
            <div className='  flex justify-center gap-10  '>
                <div className='border border-blue-500  flex-col items-center justify-center flex gap-4 px-4 py-6 rounded-lg duration-200 cursor-pointer transition-all hover:scale-105'
                     >
                    <svg width='30' height='30' xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">
                        <path
                            d="M448 160l-128 0 0-32 128 0 0 32zM48 64C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64zM448 352l0 32-256 0 0-32 256 0zM48 288c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 288z"/>
                    </svg>
                    <p>Мы не можем выполнять свои функции</p>
                </div>
                <div
                    className='border border-blue-500 flex-col items-center justify-center flex gap-4 px-4 py-6 rounded-lg duration-200 cursor-pointer transition-all hover:scale-105'
                   >
                    <svg width='30' height='30' xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 640 512">
                        <path
                            d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-54.8-43L576 224l-64 0 0 152L384 275.7l0-51.7-64 0 0 1.5L277.2 192l325.9 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L74.1 32.8 38.8 5.1zM36.8 192l85 0L21 112.5 6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM320 384l-192 0 0-160-64 0 0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-65.5-64-50.4 0 35.9z"/>
                    </svg>
                    <p>У нас нету магазинов в вашем регионе</p>
                </div>
                <div
                    className='border border-blue-500 flex-col items-center justify-center flex gap-4 px-4 py-6 rounded-lg duration-200 cursor-pointer transition-all hover:scale-105'
                >
                    <svg width='30' height='30' xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512">
                        <path
                            d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM272 192l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zM164 152l0 13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9l0 13.8c0 11-9 20-20 20s-20-9-20-20l0-14.6c-10.3-2.2-20-5.5-28.2-8.4c0 0 0 0 0 0s0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5l0-14c0-11 9-20 20-20s20 9 20 20z"/>
                    </svg>
                    <p>Мы не сможем получать оплату</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>) : (

        (loading ? (<div className='grid place-items-center min-h-[80vh]'>
            <div
                className='w-12 h-12 place-self-center border-4 border-gray-400 border-t-blue-700 rounded-full animate-spin '>

            </div>
        </div>) : (
            <div>

                {showModal ? (<Modal>
                        <NewsletterBox/>
                    </Modal>
                ) : null}
                <div className='overflow-hidden mb-10 '
                     style={{width: '100%', maxWidth: '1200px', marginRight: 'auto', marginLeft: 'auto'}}>

                    <ToastContainer/>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/collection' element={<Collection/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/resetPassword' element={<ResetPassword/>}/>
                        <Route path='/product/:productId' element={<Product/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/place-order' element={<PlaceOrder/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/profile' element={<Profile/>}/>

                </Routes>

            </div>
            <Footer className='mt-8'/>
        </div>
    ))
    )
}

export default App
