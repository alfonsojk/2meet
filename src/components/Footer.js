import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <div className="footer2">

    <MDBFooter>
   
      
          
         
            <p className="subt">
             | 2meet App | Contact | Privacy | About Terms |
            </p>
          
       
         
        
     
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;