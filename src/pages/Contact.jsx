import React, {useEffect} from 'react'
import './Contact.css'
const Contact = () => {


    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className='w-100'>

            <div className='text-center text-2xl pt-10 border-t'>
                <h1 className='font-medium'>Связаться с нами</h1>
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 items-center w-full'>
                <div className='p-6 mr-auto ml-auto justify-center items-center flex w-full flex-col p-4  '>
                    <div className='bg-gray-200 px-8 py-6 flex flex-col gap-4'>
                        <p className='font-semibold text-xl text-gray-600'>Наше заведение</p>
                        <div>
                            <p className='text-gray-500 flex items-center gap-2'>
                                <svg width='12px' height='12px' xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                                </svg>
                                7 (3822) 609-826
                            </p>

                            <p className='text-gray-500 flex items-center gap-2'>
                                <svg width='12px' height='12px' xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                </svg>
                                quant@quantorium70.ru
                            </p>

                            <p></p>
                        </div>

                    </div>
                    <h1 className='font-semibold  text-gray-600 text-2xl mt-4'>Работы Кванториума:</h1>

                    <div className='block sm:flex gap-6 items-center mt-4'>
                        <button

                            className="vee relative text-white font-semibold py-3 px-6 rounded-lg bg-blue-600 duration-200 transition-all hover:scale-105

                                    border-transparent  sm:py-1 px-3 text-sm  ">

                            <span className="z-10 relative text-sm">JS developer</span>


                            <div

                                className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-600 via-red-600 to-orange-500 animate-border"></div>



                        </button>
                        <button

                            className="duration-200 transition-all hover:scale-105 vee relative text-white font-semibold py-3 px-6 rounded-lg bg-blue-600

                                    border-transparent  sm:py-1 px-3 text-sm  ">

                            <span className="z-10 relative text-sm">C++ developer</span>


                            <div

                                className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-600 via-pink-600 to-blue-500 animate-border"></div>



                        </button>
                        <button

                            className="duration-200 transition-all hover:scale-105 vee relative text-white font-semibold py-3 px-6 rounded-lg bg-green-600

                                    border-transparent  sm:py-1 px-3 text-sm  ">

                            <span className="z-10 relative text-sm">Python developer</span>


                            <div

                                className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 via-green-600 to-black-500 animate-border"></div>



                        </button>
                    </div>

                </div>

            </div>
            <div className='w-100 font-bold text-3xl text-gray-600 flex items-center justify-center mb-20 '>
                <h1>Ищите нас в социальных сетях</h1>
            </div>
            <div className='block md:flex  w-100 justify-center gap-10 items-center mb-20'>
                <div className='px-6 py-3 rounded-2xl flex items-center justify-center  bg-gray-200 ' id='animated-box'>
                    <a href="https://vk.com/hitech70">
                        <svg width='90px' height='90px' xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path fill='#181818'
                                d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z"/>
                        </svg>
                    </a>
                </div>
                <div className='px-6 py-3 rounded-2xl flex items-center justify-center  bg-gray-200' id='animated-box'>
                    <a href='https://www.youtube.com/channel/UCmacYDqHV4VstsaM1XYfPmA'>
                            <svg width='90px' height='90px' xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512">
                                <path fill='#181818'
                                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                            </svg>
                    </a>
                </div>
                <div className='px-6 py-3 rounded-2xl flex items-center justify-center  bg-gray-200' id='animated-box'>
                    <a href="https://t.me/kvantoriumtomsk/1230">
                        <svg width='90px' height='90px' xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 496 512">A
                            <path fill='#181818'
                                d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Contact
