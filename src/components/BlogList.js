import React from "react";

const BlogList=({card,func})=>{


   const handleClick=(image,header,paragraph,key,realpara)=>{
       func(image,header,paragraph,key,realpara)
   }

const Displaycards=card.map((card)=>{
      return(
         <div className="col-sm-3" key={card.key}>
           <div className="card " style={{width:"18rem"}} >
              <img src={card.image} className="card-img-top" width="200px" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{card.header}</h5>
         <p className="card-text">{card.shortline}</p>
              <button  className="btn btn-primary" onClick={()=>{handleClick(card.image,card.header,card.shortline,card.key,card.paragraph)}}>ReadMOre</button>
                      </div>
            </div>
         </div>
      );
    })   

return(
   <div>
      <br></br>
      <div className="row align-center">
     {Displaycards}
     </div>
   </div>
);

}

export default BlogList;