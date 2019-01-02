import React, { Component } from 'react'
import AutoComplete from './autoComplete/AutoComplete'
import AutoComplete_test from './autoComplete/AutoComplete_test'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AutoComplete />
        <AutoComplete_test />
      </div>
    )
  }
}

export default App
