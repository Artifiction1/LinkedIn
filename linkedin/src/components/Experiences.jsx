/** @format */
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ArrowRight, Pencil, PeopleFill, Plus } from "react-bootstrap-icons";
import { format, parseISO } from "date-fns";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToExp } from "../redux/actions/actions";
import { connect } from "react-redux";
import ExpComponent from "./ExpComponent";

const mapStateToProps = (state) => {
  return {
    Experience: state.Experience,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addToExperience: (Exp, target) => dispatch(addToExp(Exp, target)),
});
const Experiences = ({ Experience, addToExperience }) => {
  const [show, setShow] = useState(false);
  let expMe =
    "https://striveschool-api.herokuapp.com/api/profile/62cbecece6c0300015918143/experiences";
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [toggle, setToggle] = useState(false);
  const [changed, setChanged] = useState ('')
  console.log(toggle);
  const [lastToggle, setlastToggle] = useState(true);
  const [NewExperiences, setNewExperiences] = useState([]);
  


  const FetchExperiences = async (method) => {
    let bodys = {
      area: Experience.area,
      company: Experience.company,
      role: Experience.role,
      startDate: Experience.startDate,
      endDate: Experience.endDate,
    };
    console.log(bodys);
    if (method === "POST") {
      try {
        const resolve = await fetch(expMe, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, /",
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
          body: JSON.stringify(bodys),
        });
        const Movies = await resolve.json();
        console.log(Movies);
        console.log(resolve);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/62cbecece6c0300015918143/experiences",
          {
            method: method,
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setNewExperiences(data);
          setlastToggle(toggle);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fixDate = (date) => {
    try {
      return format(parseISO(date), "yyyy MMMM");
    } catch {
      return `Present`;
    }
  };

  useEffect(() => {
    FetchExperiences("GET");
  }, []);

  if (NewExperiences.length > 0) {
    return (
      <div className="experiences">
        <div className="div-edu">
          <h3>Experience</h3>
          <Plus
            onClick={handleShow}
            size="2.5rem"
            style={{
              cursor: "pointer",
              marginLeft: "46rem",
              marginTop: "-5rem",
            }}
          />
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header>
              <Modal.Title>Add Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="input-groups">
                  <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      className="input-fields"
                      type="text"
                      id="name"
                      onChange={(e) => {
                        addToExperience(e.target.value, "role");
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>company</Form.Label>
                    <Form.Control
                      className="input-fields"
                      type="text"
                      id="surname"
                      onChange={(e) => {
                        addToExperience(e.target.value, "company");
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>StartDate</Form.Label>
                    <Form.Control
                      className="input-fields"
                      type="text"
                      id="title"
                      onChange={(e) => {
                        addToExperience(e.target.value, "startDate");
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      className="input-fields"
                      type="text"
                      id="area"
                      onChange={(e) => {
                        addToExperience(e.target.value, "endDate");
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      className="input-fields"
                      type="text"
                      id="bio"
                      onChange={(e) => {
                        addToExperience(e.target.value, "area");
                      }}
                    />
                  </Form.Group>
                </div>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={async () => {
                  await FetchExperiences("POST");
                  FetchExperiences("GET");
                  handleClose();
                }}>
                save
              </Button>
            </Modal.Footer>
          </Modal>

          <Pencil
            size="1.2rem"
            style={{
              cursor: "pointer",
              marginLeft: "50rem",
              marginTop: "-8rem",
            }}
            onClick={async () => {
             setToggle(!toggle);
             FetchExperiences('GET')
            }}
          />
        </div>
        {NewExperiences.map((exp) => (
          <div className="d-flex justify-content-between" key={exp._id}>
            <div className="mt-3">
              <div className="d-flex">
                {toggle === false && (
                  <>
                <img
                  src="https://media-exp2.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_200_200/0/1647618816994?e=1665619200&amp;v=beta&amp;t=hzqVGRvol3rh_0b7B5xMv2kmIgcVfGUICHu6g2OYAus"
                  loading="lazy"
                  width="68px"
                  height="68px"
                  alt="EPICODE logo"
                />
                
                  <div className="m-1 ml-4 d-flex flex-column text-left">
                    <h6>{exp.role}</h6>
                    <span id="eduFontSize">{exp.company}</span>
                    <span id="eduFontSize" className="text-muted">
                      {exp.startDate.substr(0, 10)} -{" "}
                      {exp.endDate !== undefined && (
                        <span>{exp.endDate.substr(0, 10)}</span>
                      )}{" "}
                      {exp.endDate === undefined && <span>now</span>}
                    </span>
                    <span id="eduFontSize">{exp.area}</span>
                  </div>
                </>)}
                {toggle === true && <ExpComponent experience={exp} />}
              </div>
            </div>
          </div>
        ))}
        <hr></hr>
      </div>
    );
  } else {
    console.log("no");
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Experiences);

/*import { useEffect, useState } from "react";
import { addToExp } from "../store/actions";
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
    return{ 
    Experience: state.Experience
}
}
const mapDispatchToProps = (dispatch) => ({
    addToExperience: (Exp,target) => dispatch(addToExp(Exp,target))
})

const Experiences = ({ Experience }) => {
    console.log(Experience)
    console.log('here')
    let ran = 0
    let SpecificExp = 'https://striveschool-api.herokuapp.com/api/profile/62cbecece6c0300015918143/experiences/' 
    let profile = "https://striveschool-api.herokuapp.com/api/profile/";   //Ankit Kumar
    let exp = 'https://striveschool-api.herokuapp.com/api/profile/609a5eb3dfccc50015a6bbba/experiences'
    let expMe = 'https://striveschool-api.herokuapp.com/api/profile/62cbecece6c0300015918143/experiences'
    const [NewExperience, setNewExperience] = useState([])
    const [PostExp, setPostExp] = useState({})
    
    const FetchExperiences = async (Method) => {
        let bodys = { 
            "area" : Experience.area,
            "company": Experience.company,
            "description": Experience.description,
            "role": Experience.role,
            "startDate": Experience.startDate,
            
            }
            if (Method === "POST"){
        try {
            const resolve = await fetch(expMe, {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json, text/plain, /',
            'Content-type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM"
                },
                body: JSON.stringify(bodys)
            })
            const Movies = await resolve.json()
            console.log(Movies)
            console.log(resolve)
        }
        catch (error) {
            console.log(error)
        }} else {
            try {
                const resolve = await fetch(expMe, {
                    method: Method,
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM"
                    },
                })
                const Movies = await resolve.json()
                setNewExperience(Movies)
                console.log(Movies)
                console.log(resolve)
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    
    
    const PostExperiences = async (method,id) => {
        let bodys = { 
            'area' : Experience.area,
            "company": Experience.Company,
            "description": Experience.description,
            "role": Experience.role,
            "startDate": Experience.startDate,
            
            }
        try {
            const resolve = await fetch(SpecificExp+id, {
                   method: method,
                headers: {
                    'Accept' : 'application/json, text/plain, /',
            'Content-type': 'application/json', 
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM"
                },
                body: JSON.stringify(bodys)
                })
                if (method === 'PUT'){
                    const changed = await resolve.json()
                    console.log(changed)
                }else{console.log('deleted')}
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        FetchExperiences('Get')
        console.log("fired")
    }, [])

    useEffect(() => {
        NewExperience.map(exp => (ran++, console.log(exp), console.log(ran)))
    })
    return (
        <div>
            <div style={{position: 'absolute', top: '50px', right: '30px'}}> {NewExperience.map(exp => {return (
            <div key={exp._id}>
                <h3>{exp.company}</h3>
                <p>{exp.description}</p>
                <button onClick={async() => {await PostExperiences("DELETE",exp._id);FetchExperiences('GET')}}>DELETE</button>
            </div>)})}</div>
        <button onClick={async() => { await FetchExperiences("POST"); FetchExperiences('GET')}}>POST</button>
        <button onClick={() => { PostExperiences("PUT") }}>PUT</button>
        <button onClick={() => {PostExperiences("DELETE")}}>DELETE</button>
        </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(Experiences)*/
