import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDollarSign } from 'react-icons/fa';

const JobDetails = () => {
    const { _id, title, company, applicationDeadline, company_logo, salaryRange, responsibilities } = useLoaderData();

    return (
        <div className='w-6/12 mx-auto my-10'>
            <div className="card bg-sky-400 w-96">
                <div className="card-body">
                    <img className='w-40 h-40 rounded-full p-1 flex justify-center items-center mx-auto' src={company_logo} alt="Logo icon!" />
                    <h2 className="card-title">Job details for {title}</h2>
                    <p>Apply for: {company}</p>
                    <p>Deadline: {applicationDeadline}</p>
                    <div>
                        <p className='underline'>Responsibilities:</p>
                        {
                            responsibilities.map((res, index) => <p key={index} className='gap-1 hover:text-white hover:bg-sky-400'>{res}</p>)
                        }
                    </div>
                    <p className='flex items-center'>Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/jobApply/${_id}`}>
                            <button className="btn">Apply Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;