import React, { Component } from 'react'
import AutoComplete from './autoComplete/AutoComplete'
import AutoComplete_fix from './autoComplete/AutoComplete_fix'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AutoComplete />
        <AutoComplete_fix />
      </div>
    )
  }
}

export default App
