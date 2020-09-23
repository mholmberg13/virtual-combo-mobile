import React from 'react'
import {Button} from 'react-native'

class Start extends React.Component {
    state = {
        label: "START"
    }
    render () {
        return (
        <Button
            title={this.state.label}
        />
        )
    }
}

export default Start;