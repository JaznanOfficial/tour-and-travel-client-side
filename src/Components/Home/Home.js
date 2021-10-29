import React from 'react';
import ExtraOne from '../ExtraSection-1/ExtraOne';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExtraOne></ExtraOne>
            <Footer></Footer>
        </div>
    );
};

export default Home;