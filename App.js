import * as React from "react";
import { View, Text } from "react-native";
import Title from './components/Header.js';
import Start from './components/Start.js'


class App extends React.Component {
  render () {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Title/>
        <Start/>

      </View>
    );
  }
}

export default App;