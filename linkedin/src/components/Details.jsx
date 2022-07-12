import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Details = () => {
    
    const params = useParams()
    console.log(params)
    let postId = params.postId
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = async () => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/posts/"+postId,
                {
                  method: "GET",
                  headers: {
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
                  },
                }
              );
            if (response.ok) {
               
                const currentPost = await response.json()
                setPost(currentPost)
                console.log(currentPost)
            } else {
                console.log('error happened fetching the articles')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const deletePost = async () => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/posts/"+postId,
                {
                  method: "DELETE",
                  headers: {
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
                  },
                }
              );
              console.log('post deleted')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        post &&
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {post.text}
          </Card.Text>
          <Button variant="primary">Edit</Button>
          <Button variant="primary" onClick={deletePost}>Delete</Button>
        </Card.Body>
      </Card> )
}

export default Details