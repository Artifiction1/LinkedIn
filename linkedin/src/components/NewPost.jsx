import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return{
        posts: state.posts.postsList,
    }
}


function NewPost () {
    useEffect(() => {
        newPost();
      }, []);

const newPost = async ({posts}) => {
    try {
        let text = { text: "hey new post" };
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
            body: JSON.stringify(text),
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

    return(
        <div></div>
    )
}

export default connect(mapStateToProps)(NewPost)