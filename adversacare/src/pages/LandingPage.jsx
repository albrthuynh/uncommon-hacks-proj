import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const LandingPage = () => {
    return (
        <div className="bg-[url('./assets/hero.png')] h-[calc(100vh-5rem)] bg-amber-950">
            <div></div>
            <p className='font-albertsans text-xl'>This is a test</p>
        </div>
    )
}

export default LandingPage