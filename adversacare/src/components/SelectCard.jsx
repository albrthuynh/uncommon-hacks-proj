import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function SelectCard({title, icon, description, destination}) {
    return (
        <>
            <Link to = {destination}>
                <div className = "h-full flex flex-row justify-between w-full hover:scale-[1.02] transition-transform duration-200 ">
                    <Card 
                        className = "flex flex-col py-10 gap-y-10 max-w-2xl h-full shadow-xl"
                        sx={{ boxShadow: 10, borderRadius: '40px', minHeight: '500px' }}
                    >
                        <CardContent className = "flex flex-col ">
                            <div className = "flex flex-col gap-y-10">
                                <h1 className = " text-4xl text-center font-albertsansbold">
                                    {title}
                                </h1>

                                <div className = "flex w-full justify-center items-center">
                                    {icon}
                                </div>

                                <p className = "mx-5 text-2xl font-albertsansmedium mt-15 text-center">
                                    {description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Link>
            
        </>
    ) 
}

export default SelectCard;