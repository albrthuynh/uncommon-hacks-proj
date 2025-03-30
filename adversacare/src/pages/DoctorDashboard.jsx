import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ComboBox from '../components/ComboBox';
import PatientCard from '../components/PatientCard';
import { useAuth0 } from "@auth0/auth0-react";


const DoctorDashboard = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    

    const examplePatients = [{
        name: "Mr. Stupid",
        drugs: [
            "ENFUVIRTIDE",
            "INDOCIN I.V.",
        ]
    },
    {
        name: "Mrs. Dumb",
        drugs: [
            "DURAGESIC-100",
            "INDOCIN I.V.",
        ]
    },
    {
        name: "Prof. Waaaaaah",
        drugs: [
            "DURAGESIC-100",
            "INDOCIN I.V.",
        ]
    },
    {
        name: "Prof. asldkfjasd;lkfj;da",
        drugs: [
            "DURAGESIC-100",
            "INDOCIN I.V.",
            "DOPAMINE HCL",
            "CLOZARIL",
            "LAMISIL",
            "DIOVAN",
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