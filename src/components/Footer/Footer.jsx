import React from 'react'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className=' bg-blue-500  text-white' style={{bgColor: '#b3c8ff', paddingTop: '10px'}}>
            <div
                className=' text-white flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-5 mt-40 text-sm text-center sm:text-start lg:text-start'>
                {/* -----Left Section----- */}
                <div className='flex flex-col items-center'>
                    <img className='mb-3 w-80 sm:w-30' src='https://static.tildacdn.com/tild3933-3862-4431-b333-346435313930/_.png' alt=""/>
                    <p className='w-full md:w-2/3 text-white leading-6  '>
                        QuantoMarket — это инновационная платформа, созданная
                        в Томске для удобных и безопасных покупок в интернете.
                        Мы предлагаем широкий выбор товаров и услуг, стремясь стать надежным партнером
                        для каждого пользователя. Разработано с учетом новейших технологий и стандартов качества.
                    </p>
                </div>

                {/*===== Center Section-------- */}
                <div>
                    <p className='text-xl font-medium mb-3 text-white'>КОМПАНИЯ</p>
                    <ul className='flex flex-col gap-2 text-white'>
                        <NavLink className='text-white hover:no-underline' to='/'>Главная страница</NavLink>
                        <NavLink className='text-white hover:no-underline' to='/about'>О нас</NavLink>
                        <NavLink className='text-white hover:no-underline' to='/contact'>Свяжитесь с нами</NavLink>
                        <a className='text-white hover:no-underline' href='https://kvantoriumtomsk.ru/educationalorganization'> Политика сайта</a>
                    </ul>
                </div>


                {/*-----Right section */}
                <div>
                    <p className='text-xl font-medium mb-3'>СВЯЖИТЕСЬ С НАМИ</p>
                    <ul className='flex flex-col gap-2 text-white'>
                        <li>7 (3822) 609-826</li>
                        <li>quant@quantorium70.ru</li>
                    </ul>
                </div>


            </div>
            {/* -----------Copyright Text---------- */}
            <div>
                <hr/>
                <p className='text-sm text-center'>Copyright &copy; 2026 by <b>QuantoMarket</b> Все права защищены
                </p>
            </div>
        </div>
    )
}
export default Footer
