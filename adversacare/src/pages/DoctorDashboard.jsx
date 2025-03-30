import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ComboBox from '../components/ComboBox';
import PatientCard from '../components/PatientCard';
import { useAuth0 } from "@auth0/auth0-react";


const DoctorDashboard = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    

    const examplePatients = [{
        name: "Raven Carey",
        drugs: [
            "ENFUVIRTIDE",
            "VALCYTE",
        ]
    },
    {
        name: "Brian Mueller",
        drugs: [
            "DURAGESIC-100",
            "VELCADE",
        ]
    },
    {
        name: "Sky Tucker",
        drugs: [
            "FLUOXETINE",
            "PHENELZINE",
        ]
    },
    {
        name: "Roman Peck",
        drugs: [
            "IBUPROFEN",
            "BENLYSTA",
        ]
    }
    ]


    return (
        <div className='bg-background flex justify-center'>
            <div className="flex flex-wrap gap-5 pt-10 px-10  min-h-[100vh] pb-10">
                {examplePatients.map((doctor) => (
                    <PatientCard style={{flex: "1 0 21%"}} doctor={doctor}/>
                ))}
            </div>
        </div>

    )
}

export default DoctorDashboard