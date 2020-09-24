import * as React from "react";
import { View, Text } from "react-native";
import Title from './components/Header.js';
import Start from './components/Start.js'
import Display from './components/Display.js'
import Filters from './components/Filters.js'


class App extends React.Component {

  state = {
    strike_one: "",
    strike_two: "",
    strike_three: "",
    strike_four: "",
    strike_five: "",
    four_checked: false,
    five_checked: false,
    combo_length: 3
  }


  handleNewCombo = () => {
    let strikes = ["jab", "cross", "hook", "overhand", "upper left", "upper right", "body left", "body right"]
    this.setState({
      strike_one: strikes[Math.floor(Math.random() * strikes.length)],
      strike_two: strikes[Math.floor(Math.random() * strikes.length)],
      strike_three: strikes[Math.floor(Math.random() * strikes.length)]
    })

    if (this.state.four_checked === true) {
      this.handleFourCombo()
      console.log(this.state.combo_length)
    }

    if (this.state.five_checked === true) {
      this.handleFiveCombo()
      console.log(this.state.combo_length)
    }

    if (this.state.combo_length === 4) {
      this.setState({
        strike_four: strikes[Math.floor(Math.random() * strikes.length)]
      })
    } else {
      this.setState({
        strike_four: ""
      })
    } 
    
    if (this.state.combo_length === 5) {
      this.setState({
        strike_four: strikes[Math.floor(Math.random() * strikes.length)],
        strike_five: strikes[Math.floor(Math.random() * strikes.length)]
      })
    } else {
      this.setState({
        strike_five: ""
      })
    }
    
  }

  handleStart = () => {
    this.handleNewCombo()
    this.intervalId = setInterval(this.handleNewCombo, 3000)
  }

  handleStop = () => {
    clearInterval(this.intervalId)
  }

  toggleFourCheck = () => {
    if (this.state.four_checked === false) {
      this.setState({
        four_checked: true
      })
    }
    if (this.state.four_checked === true) {
      this.setState({
        four_checked: false
      })
    }
    console.log(this.state.four_checked)
  }

  toggleFiveCheck = () => {
    if (this.state.five_checked === false) {
      this.setState({
        five_checked: true
      })
    }
    if (this.state.five_checked === true) {
      this.setState({
        five_checked: false
      })
    }
    console.log(this.state.five_checked)
  }

  handleFourCombo = () => {
    this.setState({
      combo_length: Math.floor(Math.random() * 2) + 3
    })
  }

  handleFiveCombo = () => {
    this.setState({
      combo_length: Math.floor(Math.random() * 3) + 3
    })
  }

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
        {/* <Filters/> */}
        <Display 
          strike_one={this.state.strike_one}
          strike_two={this.state.strike_two}
          strike_three={this.state.strike_three}
          strike_four={this.state.strike_four}
          strike_five={this.state.strike_five}
        />
        <Start
          handleStart={this.handleStart}
          handleStop={this.handleStop}
          handleNewCombo={this.handleNewCombo}
        />

      </View>
    );
  }
}

export default App;