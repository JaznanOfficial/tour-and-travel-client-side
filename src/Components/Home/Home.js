import React from 'react';
import ExtraOne from '../ExtraSection-1/ExtraOne';
import ExtraTwo from '../ExtraSection-2/ExtraTwo';

import Header from '../Header/Header';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>

        </div>
    );
};

export default Home;