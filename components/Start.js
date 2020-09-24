import React from 'react'
import {Button, View} from 'react-native'

class Start extends React.Component {
    state = {
        label: "START"
    }
    render () {
        return (
            <View>
                <Button
                    title="START"
                    onPress={this.props.handleStart}
                />
                <Button
                    title="STOP"
                    onPress={this.props.handleStop}
                />
        </View>
        )
    }
}

export default Start;