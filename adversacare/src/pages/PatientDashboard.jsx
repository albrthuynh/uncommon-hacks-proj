import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import DoctorCard from '../components/DoctorCard';
import ComboBox from '../components/ComboBox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const PatientDashboard = () => {
    const exampleDoctors = [{
        name: "Dr. Mackomma",
        specialty: "Dentistry",
        drugs: [
            "Ibuprofen",
            "DURAGESIC-100",
            "Prednisone",
        ]
    },
    {
        name: "Dr. Smith",
        specialty: "Dentistry",
        drugs: [
            "DURAGESIC-100",
            "DURAGESIC-100",
        ]
    },
    {
        name: "Dr. Charles",
        specialty: "Dentistry",
        drugs: [
            "DURAGESIC-100",
            "DURAGESIC-100",
        ]
    },
    {
        name: "Dr. Gault",
        specialty: "Dentistry",
        drugs: [
            "DURAGESIC-100",
            "DURAGESIC-100",
        ]
    },
    
    ]


    return (
        <div className='bg-background flex-col justify-center'>
            <div className='pl-10 flex items-center h-15 bg-badred'>
                <h1><span className='font-bold'>Warning</span>, taking this medication OTC may have negative effects to your health. Please consult your doctor.</h1>
            </div>
            
            <div className='pt-10 w-[50%] m-auto border-b-2 border-offblack'>
                <div className='flex justify-center mb-10'>
                    <ComboBox color='white'/>
                    <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                    </Button>
                </div>
            </div>
            <div className="flex flex-wrap gap-5 pt-10 px-10  h-[calc(100vh-5rem)]">
                {exampleDoctors.map((doctor) => (
                    <DoctorCard style={{flex: "1 0 21%"}} doctor={doctor}/>
                ))}
            </div>
        </div>

    )
}

export default PatientDashboard