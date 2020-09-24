import React from 'react'
import {Text, View} from 'react-native'
import CheckBox from '@react-native-community/checkbox';


class Filters extends React.Component {
    render () {
        return (
            <View>
                <CheckBox
                value="4 combo"
                />
            </View>
        )
    }
}

export default Filters;