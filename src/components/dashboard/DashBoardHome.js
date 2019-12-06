import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DashBoardHome extends Component {
    render() {
        return (
            <div>
                This is DashBoardHome
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{

    }
}



export default connect(mapStateToProps)(DashBoardHome)
