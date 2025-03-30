import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from "react"
import { redirect, useNavigate } from 'react-router-dom';

const steps = [
  'Basic Information',
  'Perscriptions',
  'Any Additional Drugs',
];

function Step1Component() {
    return (
        <div className = "h-full w-full">
            <h1 className = "text-center font-albertsansbold text-2xl">
                Fill Out Basic Information
            </h1>

            <div className = "flex flex-col gap-y-10 px-14">
                <TextField
                    required
                    id="required-birth"
                    label="Required"
                    placeholder="Enter Birthday"
                />
                <TextField
                    required
                    id="required-sex"
                    label="Required"
                    placeholder="Enter Gender Here"
                />
                <TextField
                    required
                    id="required-occupation"
                    label="Required"
                    placeholder="Occupation"
                />
                <TextField
                    required
                    id="required-license"
                    label="Required"
                    placeholder="Enter Drivers License"
                />
                <TextField
                    required
                    id="required-race"
                    label="Required"
                    placeholder="Enter Race"
                />
            </div>
        </div>
    )
}

function Step2Component() {
    return (
        <div>
            <h1 className = "text-center font-albertsansbold text-2xl">
                Enter Any Perscriptions Here
            </h1>

            <div className = "flex flex-col gap-y-10 px-14">
                <TextField
                    required
                    id="required-birth"
                    label="Perscription 1"
                    placeholder="Perscription 1"
                />
                <TextField
                    required
                    id="required-sex"
                    label="Perscription 2"
                    placeholder="Perscription 2"
                />
                <TextField
                    required
                    id="required-occupation"
                    label="Perscription 3"
                    placeholder="Perscription 3"
                />
                <TextField
                    required
                    id="required-license"
                    label="Perscription 4"
                    placeholder="Perscription 4"
                />
                <TextField
                    required
                    id="required-race"
                    label="Perscription 5"
                    placeholder="Perscription 5"
                />
            </div>
        </div>
    )
}

function Step3Component() {
    return (
        <div>
            <h1 className = "text-center font-albertsansbold text-2xl">
                Enter Any Additional Drugs Here 
            </h1>

            <div className = "flex flex-col gap-y-10 px-14">
                <TextField
                    required
                    id="required-birth"
                    label="Drug 1"
                    placeholder="Drug 1"
                />
                <TextField
                    required
                    id="required-sex"
                    label="Drug 2"
                    placeholder="Drug 2"
                />
                <TextField
                    required
                    id="required-occupation"
                    label="Drug 3"
                    placeholder="Drug 3"
                />
                <TextField
                    required
                    id="required-license"
                    label="Drug 4"
                    placeholder="Drug 4"
                />
                <TextField
                    required
                    id="required-race"
                    label="Drug 5"
                    placeholder="Drug 5"
                />
            </div>
        </div>
    )
}



function SliderComponent() {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    // rendering the component based off what step it is
    function renderComponent(currStep) {
        if (currStep == 0) {
            return <Step1Component/>;
        }
        else if(currStep == 1) {
            return <Step2Component/>;
        }
        else if(currStep == 2){
            return <Step3Component/>;
        }
        else if( currStep < 0 ) {
            setStep(0);
        }
        else if (currStep > 2 ) {
            navigate('/patient-dashboard');
            return null;
        }
        else {
            return <p>Unknown Component</p>
        }
    }

    return (
        <div className = "mt-10">
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>

            <div className = "text-center font-albertsansmedium mt-5">
                <p className = "text-xl">Steps {step + 1}/3</p>
            </div>

            <div className = "mt-5">
               {renderComponent(step)} 
            </div>

            <div className = "flex flex-row justify-between mt-10 px-10 font-albertsansmedium">
                    <Button
                        variant='contained' 
                        sx ={{
                        borderRadius:12,
                        color:'white',
                        width:120
                        }}
                        onClick = {() => {setStep(step - 1)}}
                    >
                        Back
                    </Button>

                    <Button
                        variant='contained' 
                        sx ={{
                         borderRadius:12,
                         color:'white',
                         width: 120
                        }}
                        onClick = {() => {setStep(step + 1)}}
                    >
                        Next
                    </Button>
            </div>
        </div>
    );
}

export default SliderComponent;