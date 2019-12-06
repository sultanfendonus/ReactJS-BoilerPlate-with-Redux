import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAllPost} from '../../actions/index'

export class HomePageBody extends Component {
    componentDidMount(){
        this.props.getAllPost()
    }
    render() {
        if(!this.props.postList){
            return (
                <div>
                    Loading ...
                </div>
            )
        }

        return this.props.postList.map((post)=>{
            return(
                <div key={post.id}>{post.title}</div>
            )
        })
        
    }
}

const mapStateToProps = (state) => {
    return{
        postList: state.postReducer.postList
    }
}


const mapDispatchToProps = (dispatch)=> {
    return{
        getAllPost: ()=> {
            dispatch(getAllPost())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePageBody)

