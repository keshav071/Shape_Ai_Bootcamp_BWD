import React from "react";
 
function Footer()
{
 var curntyear=new Date().getFullYear(); 

  return (
           <footer>
            <p>Copy @ {curntyear}</p>
           </footer>
        );
  }
export default Footer;