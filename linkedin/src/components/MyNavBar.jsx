import { Navbar, Nav, Form, FormControl, Image, Container} from "react-bootstrap";
import "./MyNavbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNavbar = () => {
  return (
    <>
    
    <Navbar
      id="Navbar"
      className="d-flex justify-content-center py-0 flex-nowrap" 
    ><Container fluid style={{width: "100vw"}} className="d-flex align-items-center"> 
 
      <i id="linkedinIcon" className="bi bi-linkedin"></i>
      <div style={{backgroundColor: "#eef3f8", width: "280px", height:"34px"}} className="d-flex justify-content-left align-items-center">
      <i className="bi bi-search mx-3" style={{color: "grey", fontSize:"16px"}}></i>
      <Form id="searchBar" className="d-none d-md-inline-block">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 "
          style={{backgroundColor: "#eef3f8", border: "none", height: "34px", width: "110%"}} 
        />
      </Form>
      </div>
  

        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center"
          href="/"
        >
          <i className="iconNavBar bi bi-house-door-fill "></i>
          <span className="d-none d-md-inline-block mt-n1">Home</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center"
          href="#home"
        >
          <i className="iconNavBar bi bi-people-fill"></i>
          <span className="d-none d-md-inline-block mt-n1">Network</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center"
          href="#home"
        >
          <i className="iconNavBar bi bi-briefcase-fill"></i>
          <span className="d-none d-md-inline-block mt-n1">Job</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center"
          href="#home"
        >
          <i className="iconNavBar bi bi-chat-dots-fill"></i>
          <span className="d-none d-md-inline-block mt-n1">Messaging</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center"
          href="#home"
        >
          <i className="iconNavBar bi bi-bell-fill"></i>
          <span className="d-none d-md-inline-block mt-n1">Notification</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center"
          href="/in/me"
          id="userImg"
        >
          <Image
            id="UserImageNavbar"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            roundedCircle
          />
          <span className="d-none d-md-inline-block" style={{marginTop:"0rem"}}>Me</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center"
          href=""
        >
          <i className="iconNavBar bi bi-grid-3x3-gap-fill"></i>
          <span className="d-none d-md-inline-block mt-n1">Work</span>
        </Nav.Link>
        <Nav.Link id="tryPremium" style={{color: "#915907"}} className="d-flex flex-column align-items-center">
          <div>Try Premium</div>
          <div>for free</div>
        </Nav.Link>

        </Container>
    </Navbar>
    </>
  
  );
};

export default MyNavbar;