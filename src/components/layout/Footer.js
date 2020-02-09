import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">  
      <div className="footer-copyright text-center ">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Ligma</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;