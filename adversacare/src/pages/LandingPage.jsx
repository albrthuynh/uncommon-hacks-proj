import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const LandingPage = () => {
    return (
        <div className="flex justify-center items-center bg-[url('./assets/hero.png')] h-[calc(100vh-4rem)] bg-amber-950">
            <div className='flex flex-col items-center  bg-background/60 px-8 pt-4 pb-10 rounded-l'>
                <h1 className='text-9xl'>Adversa<span className='text-accent underline'>Cares</span></h1>
                <p className='pt-4 text-3xl'>Helping you <span className='font-bold'>and</span> your doctor</p>
            </div>
        </div>
    )
}

export default LandingPage