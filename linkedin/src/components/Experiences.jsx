import { useEffect, useState } from "react";
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

export default connect(mapStateToProps,mapDispatchToProps)(Experiences)