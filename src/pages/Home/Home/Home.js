import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-7xl text-purple-500 mt-14'>My Cake House</h2>
                <p className='text-2xl my-3'>The perfect dish every time specially for you. <br />From our oven to your door.</p>
                <Link className='btn btn-outline px-36' to='/signup'>Sign UP <FaArrowRight className='ml-3'></FaArrowRight></Link>
            </div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;