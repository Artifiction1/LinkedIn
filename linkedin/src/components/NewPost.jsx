import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    allPosts: state.posts.postsList,
  }
}


const NewPost = ({ allPosts }) => {
  const [post, setPost] = useState('');


  const handleSubmit = async (e) => {
   
    try {
      e.preventDefault();
      const element = {text:  post };
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
          body: JSON.stringify(element),
        }
      );
      if (response.ok) {
        let newPost = await response.json();
        console.log(newPost);
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div>{allPosts.reverse().slice(0,50).map((current, index) => {if(current.user&& current.user._id=== '62cbecece6c0300015918143'){return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {current.text}
          </Card.Text>
          <Button variant="primary"><Link className='text-white' to={`/Details/${current._id}`}>Details</Link></Button>
        </Card.Body>
      </Card>
      )}})}</div>
      <div className="create">
        <h2>Add a New Post</h2>
        <form onSubmit={handleSubmit}>
          <label>Create New Post:</label>
          <input
            type="text"
            required
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <button>Add Post</button>
        </form>
      </div>
    </>
  )
}

export default connect(mapStateToProps)(NewPost)