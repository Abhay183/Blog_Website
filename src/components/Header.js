import React from "react";
const Header=({label})=>{
    return(
        <div className="text-bg-primary p-3 text-center fs-3">
          {label}
        </div>
    );
}

export default Header;