import SelectCard from "../components/SelectCard";
import { BiHealth } from "react-icons/bi";
import {IoPersonOutline} from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";

function SelectRolePage() {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <div className = "flex flex-row gap-10 w-full h-full justify-center items-center mt-20">
                <SelectCard
                    title = "Patient"
                    icon = {<IoPersonOutline className = "h-45 w-45"/>}
                    description = "Connect with your doctor and keep your prescriptions organized."
                    destination = "/patient-signup" 
                />

                <SelectCard
                    title = "Doctor"
                    icon = {<BiHealth className = "h-45 w-45"/>}
                    description = "Manage your patients and track their medications quickly and easily."
                    onClick ={() => loginWithRedirect()}
                />
            </div>
        </>
    )

}

export default SelectRolePage;