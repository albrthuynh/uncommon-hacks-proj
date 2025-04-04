import avatar from "../assets/avatar.png"
import ComboBox from "./ComboBox"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const PatientCard = ({doctor, style, danger=false}) => {

    const [images, setImages] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = async () => {
      setOpen(true);

      const queryParams = doctor.drugs.map(d => `q=${encodeURIComponent(d)}`).join("&");

      try {
        const response = await fetch(`http://127.0.0.1:5000/?${queryParams}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch plot data", error);
      }
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <div className={`p-2 rounded-2xl border-2 ${!danger ? 'border-offblack' : 'border-badred bg-badred'}`}>
                <button onClick={handleClickOpen}>
                    <div className="flex-col content-center bg-offwhite shadow-lg rounded-2xl w-100 h-20 hover:scale-[1.02] ">
                        <div className="flex ml-5 gap-3 items-center"> 
                            <img src={avatar} className="h-12"/>
                            <div>
                                <h1 className="text-2xl">{doctor.name}</h1>
                                {danger && <h1><span className="text-badred animate-pulse">ALERT</span> potentially dangerous interaction</h1>}
                            </div>
                        </div>
                    </div>
                </button>
                <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Dashboard 
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {/* <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List> */}
        
        <div style={{ padding: '2rem' }} className = "flex flex-col w-full h-full items-center justify-center mt-[900px]">
          {images.map((img, i) => (
            <div key={i} style={{ marginBottom: '2rem' }}>
              <h3>{img.type.toUpperCase()}</h3>
              <img
                src={`data:image/png;base64,${img.base64}`}
                alt={img.type}
                style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
              />
            </div>
          ))}
        </div>
      </Dialog>                
                {doctor.drugs.map((drug) => (
                    <div className="ml-10 mt-2 flex-col content-center bg-offwhite shadow-lg rounded-2xl w-90 h-15">
                        <div className="flex ml-5 gap-3 items-center justify-between pr-2"> 
                                <h1 className="text-xl">{drug}</h1>
                                <Button variant="outlined" startIcon={<DeleteIcon />}>
                                    Delete
                                </Button>
                        </div>
                    </div>
                ))}
                <div className="ml-10 mt-2 flex-col content-center bg-offwhite shadow-lg rounded-2xl w-90 h-15">
                    <div className="flex ml-2 gap-3 items-center"> 
                        <div className="flex">
                            <ComboBox sx={{width: 200}}/>
                            <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default PatientCard