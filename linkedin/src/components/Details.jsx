import { useEffect, useState } from 'react'
import { Container, Row, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Details = () => {
    // let's fetch the books from the Strivazon project
    // let's put them into a state variable
    // let's map them in the return statement
    const params = useParams()
    console.log(params)
    let postId = params.movieId
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
                // let's take the books out of the body
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

    return (
        post &&
        <ListGroup>
  <ListGroup.Item>Title :{post.title} </ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup> )
}

export default Details