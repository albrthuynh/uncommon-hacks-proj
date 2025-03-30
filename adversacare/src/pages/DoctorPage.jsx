import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function DoctorPage() {
    const [patientsList, setPatientsList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClose = () => {setIsOpen(false)};
    const handleOpen = () => {setIsOpen(true)};

    return (
        <div className = "w-full h-full">
            {patientsList.length > 0 ? (
                // render when the list has items
                <div>
                    Something Exists!
                </div>
                
            ) : (
                // render when the list is empty
                <div>
                    <p> No patients found </p>
                </div>
            )}

            <Button
                variant="contained"
                color="primary"
                sx={{
                position: "fixed",
                bottom: 32,
                right: 32,
                borderRadius: "50%",
                minWidth: 56,
                height: 56,
                boxShadow: 3,
                }}
                onClick={handleOpen}
            >
                <AddIcon />
            </Button>



            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="add-patient-modal"
            >
                <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
                >
                <h2 id="add-patient-modal">Add New Patient</h2>
                <p>Patient form would go here...</p>
                <Button onClick={handleClose} sx={{ mt: 2 }}>
                    Close
                </Button>
                </Box>
            </Modal>
        </div>
    )
}


export default DoctorPage;