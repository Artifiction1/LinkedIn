import { useState } from "react"
import axios from 'axios';
import React,{Component} from 'react'; 


const FileUpload = ({id}) => {
    const [selectedFile,setSelectedFile] = useState(null)
    const config={headers: {Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA2Mjk1YTJlZThkNjAwMTU0OGRlMDkiLCJpYXQiOjE2NjEzNDgxODcsImV4cCI6MTY2MjU1Nzc4N30.URz0tug9Gqbu9_CZ_qzivf3oqKg6jgOwvf4JQrICDoA"}
    }
      // On file select (from the pop up) 
      const onFileChange = event => { 
        // Update the state 
        setSelectedFile(event.target.files[0]); 
      }; 
      console.log('/')
       console.log(id)
       console.log('/')
      // On file upload (click the upload button) 
      const onFileUpload = () => { 
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "experience", 
         selectedFile, 
          selectedFile.name 
        ); 
       
        // Details of the uploaded file 
        console.log(selectedFile); 
       
        // Request made to the backend api 
        // Send formData object 
        axios.post("https://striveschool-api.herokuapp.com/api/profile/62cbecece6c0300015918143/experiences/"+id._id+"/picture",formData,config); 
      }; 
       
      // File content to be displayed after 
      // file upload is complete 
      const fileData = () => { 
        if (selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {selectedFile.name}</p> 
              <p>File Type: {selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div>
            </div> 
          ); 
        } 
      }; 
       
      
        return ( 
          <div> 
              <h3> 
                experience picture
              </h3> 
              <div> 
                  <input type="file" style={{backgroundColor: 'white'}} onChange={onFileChange} /> 
                  </div><div>
                  <button onClick={onFileUpload} style={{backgroundColor: 'red', color: 'white'}}> 
                    Upload! 
                  </button> 
              </div> 
            {fileData()} 
          </div> 
        ); 
         

}
export default FileUpload


/*
const [fileName, setFileName] = useState()
const [filePath, setFilePath] = useState()
const [latestPost, setLatestPost] = useState()


const handleSubmit=(event) =>{
event.preventDefault();
const data = new FormData()

data.append("post[title]", event.target.title.value)
data.append("post[image]", event.target.image.files[0]);
submitToAPI(data)
}

const submitToAPI = async (data) => {
    try{
fetch ( 'https://striveschool-api.herokuapp.com/api/profile/62cbecece6c0300015918143/picture', {
    method: "POST",
    body: data
})
const response = await response.json()
data = setLatestPost(data.image_url);
}catch(err){console.log(err)}
}


return(
    <div style={{width: '68px', height: '68px'}}>
    <form onSubmit={(e)=> handleSubmit(e)}/>
    
    <label htmlFor="Title">Title</label>
    <input type="text" name="title" />
    <label htmlFor="image">Image</label>
    <input type="file" name="image"/>

    <button type="submit">create post</button>
     </div>
)*/