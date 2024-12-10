import React from "react";


const Elaborate=({image,para,heade,realpara,handledelete})=>{
 
     const setBack=()=>{
        handledelete();
     }

    return(
     <div className="container-md m-3 text-center">
        <div className="text-start" onClick={setBack}>
        <button className="bg-primary ">Back</button>
        </div>
        <br></br>
        <h2 className="fs-1 bold ul">{heade}</h2>
        <img src={image} />
        <br></br>
        <br></br>
        <h3>{realpara}</h3>
        <br></br>
        <br></br>
     </div>
    );
}

export default Elaborate;