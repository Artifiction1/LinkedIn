import { useEffect, useState } from "react";
import { addToExp } from "../store/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return{
 
    }
}
const mapDispatchToProps = (dispatch) => ({
    addToExperience: (Exp) => dispatch(addToExp(Exp))
})

const Experiences = ({ addToExperience, Experience }) => {
    console.log(Experience)
    let ran = 0
    let SpecificExp = 'https://striveschool-api.herokuapp.com/api/profile/62cbecece6c0300015918143/experiences/62cc284be6c030001591816a' 
    let profile = "https://striveschool-api.herokuapp.com/api/profile/";   //Ankit Kumar
    let exp = 'https://striveschool-api.herokuapp.com/api/profile/609a5eb3dfccc50015a6bbba/experiences'
    let expMe = 'https://striveschool-api.herokuapp.com/api/profile/62cbecece6c0300015918143/experiences'
    const [NewExperience, setNewExperience] = useState([])
    const [PostExp, setPostExp] = useState({})
    const FetchExperiences = async (Method) => {
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
    
    
    const PostExperiences = async (method) => {
        let bodys = { 
            "area": "Alabama",
            "company": "Strive School",
            "description": "Doing stuff",
            "role": "CTO",
            "startDate": "2019-06-16",
            "endDate": "2019-06-16",
            
            }
        try {
            const resolve = await fetch(SpecificExp, {
                method: method,
                headers: {
                    'Accept' : 'application/json, text/plain, /',
            'Content-type': 'application/json', 
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM"
                },
                body: JSON.stringify(bodys)
                })
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
        <button onClick={() => { PostExperiences("POST") }}>POST</button>
        <button onClick={() => { PostExperiences("PUT") }}>PUT</button>
        <button onClick={() => {PostExperiences("DELETE")}}>DELETE</button>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Experiences)