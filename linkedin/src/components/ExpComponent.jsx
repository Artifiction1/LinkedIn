import { useEffect } from "react";
import { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { addToExp } from "../redux/actions/actions";
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
    return{ 
    Experience: state.Experience
}
}
const mapDispatchToProps = (dispatch) => ({
    addToExperience: (Exp,target) => dispatch(addToExp(Exp,target))
})


const ExpComponent = ({experience, addToExperience, Experience}) => {

    const [Role,setRole]=useState('')
    const [Company,setCompany]=useState('')
    const [StartDate,setStartDate]=useState('')
    const [EndDate,setEndDate]=useState('')
    const [Area,setArea]=useState('')

    const PostExperiences = async (method,id) => {
        let bodys = { 
            'area' : Area,
            "company": Company,
            "role": Role,
            "startDate": StartDate,
            "endDate": EndDate
            
            }
            let SpecificExp = 'https://striveschool-api.herokuapp.com/api/profile/62cbecece6c0300015918143/experiences/'
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
                    
                }else{console.log('deleted')
                }
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
    setRole(experience.role)
    setCompany(experience.company)
    setStartDate(experience.startDate)
    setEndDate(experience.endDate)
    setArea(experience.area)},[])
    return (
        <div className="m-1 ml-4 d-flex flex-column text-left">
            <InputGroup size="sm" className="">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Role"
          Value={Role}
          onChange={(e)=>setRole(e.target.value)}
        />
      </InputGroup>
      <InputGroup size="sm" className="">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          Value = {Company}
          onChange={(e)=>setCompany(e.target.value)}
        />
      </InputGroup>
      
      <InputGroup className="">
      <Form.Control aria-label="First name" 
      value={StartDate}
          onChange={(e)=>setStartDate(e.target.value)}
          placeholder="startDate"/>
      <Form.Control aria-label="Last name" 
      value= {EndDate}
      onChange={(e)=>setEndDate(e.target.value)} 
      placeholder="endDate"/>
    </InputGroup>
              
      <InputGroup size="sm" className="">
        <Form.Control
        value = {Area}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Location"
          onChange={(e)=>setArea(e.target.value)}
        />
      </InputGroup>
      <div className="d-flex justify-content-between">
      <Button style={{backgroundColor: 'red', color: 'white'}}
      onClick = {()=> { PostExperiences("PUT", experience._id);addToExperience(Area, 'description'); console.log(Experience.description)}}
      >save</Button>
      <Button style={{backgroundColor: 'red', color: 'white'}}
      onClick={() => {PostExperiences("DELETE",experience._id);addToExperience(Area, 'description'); console.log(Experience.description)}}>DELETE</Button>
          </div></div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpComponent);