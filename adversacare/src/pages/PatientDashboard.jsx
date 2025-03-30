import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import PrescriptionCard from '../components/PrescriptionCard';
import ComboBox from '../components/ComboBox';

const PatientDashboard = () => {
    const exampleDoctors = [{
        name: "Dr. Blahblahblah",
        specialty: "Dentistry",
        drugs: [
            "Ibuprofen",
            "Levothyroxine",
            "Prednisone",
        ]
    },
    {
        name: "Dr. Waaaaaah",
        specialty: "Dentistry",
        drugs: [
            "Levothyroxine",
            "Levothyroxine",
        ]
    },
    {
        name: "Dr. Waaaaaah",
        specialty: "Dentistry",
        drugs: [
            "Levothyroxine",
            "Levothyroxine",
        ]
    },
    {
        name: "Dr. Waaaaaah",
        specialty: "Dentistry",
        drugs: [
            "Levothyroxine",
            "Levothyroxine",
        ]
    },
    
    ]


    return (
        <div className='bg-background'>
            <div className='pl-10 flex items-center h-15 bg-badred'>
                <h1><span className='font-bold'>Warning</span>, taking this medication OTC may have negative effects to your health. Please consult your doctor.</h1>
            </div>
            
            <div className='pt-10 w-[50%] m-auto border-b-2 border-offblack'>
                <div className='flex justify-center mb-10'>
                    <ComboBox color='white'/>
                </div>
            </div>
            <div className="flex flex-wrap justify-around gap-5 pt-10 px-10  h-[calc(100vh-5rem)]">
                {exampleDoctors.map((doctor) => (
                    <PrescriptionCard style={{flex: "1 0 21%"}} doctor={doctor}/>
                ))}
            </div>
        </div>

    )
}

export default PatientDashboard