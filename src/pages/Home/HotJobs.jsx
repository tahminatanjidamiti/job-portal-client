import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-portal-server-six-mocha.vercel.app/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    }, [])
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold text-center mx-auto my-5'>Jobs Of The Day</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job} ></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;