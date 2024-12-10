import React from "react";

const Display=({val,call,func})=>{
    const myval=val.map((val)=>{
        return(
            <div key={val.value} >
            <h1>{val.name}</h1>
            <button onClick={()=>func(val.value)}>Delete</button>
            </div>
        );
    })

    return(
         <div>
         {myval}
         </div>
    );
}

export default Display;