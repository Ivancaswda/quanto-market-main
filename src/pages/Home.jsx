
import React, { useState, useEffect } from 'react';

import ProductsGrid from "../components/ProductsGrid/ProductsGrid.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Policy from "../components/Policy/Policy.jsx";
import NewsletterBox from "../components/NewsletterBox/NewsletterBox.jsx";

const Home = () => {


    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (

                <>
                    <Hero  />
                    <ProductsGrid  />
                    <Policy  />
                    <NewsletterBox  />
                </>

    );
};

export default Home;
