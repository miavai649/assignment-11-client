import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-omega-one.vercel.app/feature')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='my-20 container mx-auto'>
            <h2 className='text-center text-5xl'>Bestseller Cakes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-8'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='text-center'>
            <Link className='btn my-5 px-28' to='/services'>See ALL</Link>
            </div>
        </div>
    );
};

export default Services;