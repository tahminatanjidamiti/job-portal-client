import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="Company Logo!" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className='flex gap-1 items-center'><HiOutlineLocationMarker />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title} 
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map((skill, index) => <p key={index}className='border rounded-md text-center px-2 hover:text-white hover:bg-sky-400'>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center mt-4">
                    <p className='flex items-center'>Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                   <Link to={`/jobs/${_id}`}> <button className="btn bg-sky-400">Apply</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;