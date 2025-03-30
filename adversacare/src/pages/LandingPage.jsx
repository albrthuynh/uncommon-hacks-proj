import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const LandingPage = () => {
    return (
        <div className="flex justify-center items-center bg-[url('./assets/adversacarebg.jpg')] bg-cover bg-center h-[calc(100vh-4rem)] ">
            <div className='flex ml-[450px] flex-col items-end bg-background/60 px-8 pt-4 pb-10 rounded-l'>
                <h1 className='text-9xl'>Adversa<span className='text-accent underline'>Cares</span></h1>
                <p className='pt-4 text-3xl'>Helping you <span className='font-bold'>and</span> your doctor</p>
            </div>
        </div>
    )
}

export default LandingPage