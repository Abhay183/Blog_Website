 import React,{useState} from "react";

 const WriteBlog=({functi})=>{

    const[Header,setheader]=useState("");
    const[Desc,setDesc]=useState("");
    const[imgurl,setimage]=useState("");
    const[full,setFull]=useState("");

    const handleformSubmit=()=>{
      functi(Header,Desc,imgurl,full)
       setDesc("");
       setFull("");
       setheader("");
       setimage("");
    }

    return(
    <div className="row align-center m-4">
        <br/>
        <br/>

        <div  className="form-group">
       <label>Header:</label><br/> <input className="form-control-lg"  value={Header} type="text" size="100" name="Header" 
         onChange={(e)=>{
           setheader(e.target.value)
         }}       
       
       />
         <br></br>
      <label>  Description:</label><br/> <input className="form-control-lg" value={Desc} type="text"  size="150" name="description"
         onChange={(e)=>{
            setDesc(e.target.value)
          }}         
      />
        <br/>
        <label>image URL:</label><br/><input className="form-control-lg" value={imgurl} type="text" name="imageurl"
         onChange={(e)=>{
            setimage(e.target.value)
          }}   
        />
        <br/>
        <label>FULL BLOG</label><br/>
         <textarea className="form-control-lg" value={full} rows="50" cols="100"
          onChange={(e)=>{
            setFull(e.target.value)
          }}   
         />
         
         <input type="button" onClick={handleformSubmit} className="btn btn-lg btn-primary" value="Save Your Blog"/>
         </div>
       
    </div>
    );
 }

 export default WriteBlog;