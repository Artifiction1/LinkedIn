import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { newPostAction } from '../redux/actions'

const mapStateToProps = (state) => {
    return{
   
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        newPostList: () => {
            dispatch(newPostAction())
        }
    }
}


function NewPost () {
    useEffect(() => {
        newPostList();
      }, []);
    return(
        <div>NewPost</div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)