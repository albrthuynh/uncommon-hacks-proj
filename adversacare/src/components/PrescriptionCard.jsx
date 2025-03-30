import avatar from "../assets/avatar.png"

const PrescriptionCard = ({doctor, style}) => {

    return (
        <div>
            <div className=" p-2 rounded-2xl border-2 border-offblack ">
                <div className="flex-col content-center bg-offwhite shadow-lg rounded-2xl w-100 h-20">
                    <div className="flex ml-5 gap-3 items-center"> 
                        <img src={avatar} className="h-12"/>
                        <div>
                            <h1 className="text-2xl">{doctor.name}</h1>
                            <h1>{doctor.specialty}</h1>
                        </div>
                    </div>
                </div>
                {doctor.drugs.map((drug) => (
                    <div className="ml-10 mt-2 flex-col content-center bg-offwhite shadow-lg rounded-2xl w-90 h-15">
                        <div className="flex ml-5 gap-3 items-center"> 
                            <div>
                                <h1 className="text-xl">{drug}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>

    )
}

export default PrescriptionCard