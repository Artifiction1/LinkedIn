export const getPostsAction = () => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch (
                "https://striveschool-api.herokuapp.com/api/posts/",{
                    method: "GET",
                    headers: {
                        Authorization:
                         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM"
                    }
                }
            );
            if (response.ok) {
                let posts = await response.json();
                console.log(posts)
                dispatch({
                  type: 'GET_POSTS',
                  payload: posts,
                })
             
  
              }
        } catch (error) {
            console.log(error)
        }
    }
}

export const newPostAction = () => {
    return async (dispatch, getState) => {
        try {
            let text ="hey i am a post"
            let response = await fetch (
                "https://striveschool-api.herokuapp.com/api/posts/", {
          method: 'POST',
          headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
          body: JSON.stringify(text)
        }
            );
            if (response.ok) {
                let newPost = await response.json();
                console.log(newPost)
                dispatch({
                  type: 'NEW_POST',
                  payload: newPost,
                })
             
  
              }
        } catch (error) {
            console.log(error)
        }
    }
}