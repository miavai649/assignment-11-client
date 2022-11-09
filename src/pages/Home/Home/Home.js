import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-7xl text-purple-500 mt-14'>My Cake House</h2>
                <p className='text-2xl my-3'>The perfect dish every time specially for you. <br />From our oven to your door.</p>
                <button className='btn btn-outline'>Sign UP <FaArrowRight className='ml-3'></FaArrowRight></button>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;