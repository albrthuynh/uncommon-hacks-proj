import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SelectCard() {
    return (
        <>
            <Card className = "border border-red max-h-[275px]">
                <CardContent>
                    <Typography gutterBottom className = "font-albertsanslight" sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Word of the Day
                    </Typography>
                    
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                    <Typography className = "font-albertsansmedium text-2xl" variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>

                    <p className='font-albertsansmedium text-3xl'>
                        testing data 
                    </p>

                    <p className='font-albertsanslight text-2xl'>
                        Testing data
                    </p>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card> 
        </>
    ) 
        
}

export default SelectCard;