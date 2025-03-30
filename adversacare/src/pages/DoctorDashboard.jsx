import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ComboBox from '../components/ComboBox';
import PatientCard from '../components/PatientCard';

const DoctorDashboard = () => {
    const examplePatients = [{
        name: "Mr. Stupid",
        drugs: [
            "Ibuprofen",
            "Levothyroxine",
            "Prednisone",
        ]
    },
    {
        name: "Mrs. Dumb",
        drugs: [
            "Levothyroxine",
            "Levothyroxine",
        ]
    },
    {
        name: "Prof. Waaaaaah",
        drugs: [
            "Levothyroxine",
            "Levothyroxine",
        ]
    },
    {
        name: "Prof. asldkfjasd;lkfj;da",
        drugs: [
            "Levothyroxine",
            "Levothyroxine",
            "Levothyroxine",
            "Levothyroxine",
            "Levothyroxine",
            "Levothyroxine",
        ]
    }
    ]


    return (
        <div className='bg-background flex justify-center'>
            <div className="flex flex-wrap gap-5 pt-10 px-10  h-[calc(100vh-5rem)]">
                {examplePatients.map((doctor) => (
                    <PatientCard style={{flex: "1 0 21%"}} doctor={doctor}/>
                ))}
            </div>
        </div>

    )
}

export default DoctorDashboard