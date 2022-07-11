import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPostsAction } from '../redux/actions'

const mapStateToProps = (state) => {
    return{

    }
}
const mapDispatchToProps =(dispatch) => {
    return {
        getPostsList: ()=>{
            dispatch(getPostsAction())
        }
    }
}

function GetPosts() {
    return (
        <div>GetPosts</div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GetPosts)
