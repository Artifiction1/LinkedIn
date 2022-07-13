import "./FooterRight.css";
import {Dropdown, DropdownButton, Modal, Button }from "react-bootstrap"

const FooterRight = () => {
  return (
    <div className="mainsticky mt-4">
      
      <div className="compact-links1 d-flex mx-2 justify-content-center">
        
        <a
          href="https://about.linkedin.com/it-it?lr=1"
          target="_blank"
          rel="noopener noreferrer"
          className="items"
        >
          About
        </a>

        <a
          href="https://www.linkedin.com/accessibility"
          target="_blank"
          rel="noopener noreferrer"
          className=" mx-3 items"
        >
          Accesibility
        </a>

        <a
          href="https://www.linkedin.com//help/linkedin?trk=footer_d_flagship3_feed&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIvDJ8flGSJG7%2BUFMDZeaBw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="items"
        >
          Help Center
        </a>
      </div>
      <div className="compact-links2 mt-1 d-flex justify-content-center">
      <div className="mr-3">
              <DropdownButton
                id="dropdown-basic-button"
                title="Privacy & Terms"
                size="sm"
                className="mb-2"
              >
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Privacy Policy
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/user-agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  User Agreement
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Cookie Policy
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/copyright-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Copyright Policy
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <a className="items choices"href="https://www.linkedin.com/help/linkedin/answer/62931?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIvDJ8flGSJG7%2BUFMDZeaBw%3D%3D">Ad Choices</a>


      </div>
      <div className="compact-links3 d-flex justify-content-center">
          <a className=" mx-2 items adv" href="https://business.linkedin.com/it-it/marketing-solutions/ads?lr=1">Advertising</a>
          <DropdownButton
                id="dropdown-basic-button"
                title="Buisness Services"
                size="sm"
                className="mb-2"
              >
                <Dropdown.Item
                  href="https://business.linkedin.com/talent-solutions?trk=flagship_nav&veh=li-header-dropdown-lts-control&src=li-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop2"
                >
                  Talent Solutions <div className="text-muted drop2sub "><br /> Find attract and recruit talent </div>
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/user-agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop2"
                >
                  Sales solution <div className="text-muted drop2sub "><br /> unlock sales opportunities </div>
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-header-dropdown-lss-control&src=li-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop2"
                >
                  Post a job for free <div className="text-muted drop2sub "><br /> Get your job in front of quality <br /> Candidates</div>
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://business.linkedin.com/it-it/marketing-solutions/ads?lr=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop2"
                >
                  Marketing Solutions <div className="text-muted drop2sub "><br /> develop talent across your <br /> organization</div>
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://learning.linkedin.com/?trk=d_flagship3_nav&veh=learning_solutions&src=li-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop2"
                >
                  Learning Solutions <div className="text-muted drop2sub "><br /> develop talent across your <br /> organization</div>
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/company/setup/new/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop2 mt-2"
                >
                  Create a company Page
                </Dropdown.Item>



                
                
              </DropdownButton>
              </div>
              <div className="compact-links4 d-flex justify-content-center">
              <Button size="small"  className="buttonsModal">Get the Linkedin app</Button>
              <Button size="small"  className="buttonsModal ml-3">More</Button>
              </div>

              <div className="d-flex justify-content-center mt-2">
              <img
          className="mb-2"
          id="linklogomini"
          src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo.png"
          alt=""
        />
        <div>LinkedIn Corporation © 2022</div>
              </div>

      
    </div>
  );
};

export default FooterRight;