import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addToExp } from "../store/actions";
import { connect } from "react-redux";
import Experiences from './Experiences';


const mapStateToProps = (state) => {
  return{

  }
}
const mapDispatchToProps = (dispatch) => ({
  addToExperience: (Exp,target) => dispatch(addToExp(Exp,target))
})

const ExpInput = ({addToExperience, initialState}) => {

  

    return(
      <div style={{ textAlign: 'right'}}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">area</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e)=>{{addToExperience(e.target.value,'area')}}}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">company</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e)=>{addToExperience(e.target.value,'company')}}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">description</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e)=>{addToExperience(e.target.value, 'description')}}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">role</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e)=>{addToExperience(e.target.value,'role')}}
          />
        </InputGroup>
        
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Date Started</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e)=>{addToExperience(e.target.value, 'startDate')}}
          />
        </InputGroup>
        
        </div>)
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpInput)