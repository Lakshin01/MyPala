import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    
    <MDBFooter color="black" className="font-small pt-4 mt-4" fixed>  
      <div className="footer-copyright text-center py-3">
        
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Ligma</a>
       
      </div>
    </MDBFooter>
    
  );
}

export default Footer;