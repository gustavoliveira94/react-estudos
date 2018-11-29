import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as clickButton from './actions/clickButton'
import * as removeValue from './actions/removeValue'
import './App.css';
import Counter from './components/Counter'

class App extends Component {
  
  state = {
    inputValue : ''
  }

  addInputValue = () => {
    this.props.clickButton.clickButton(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  deleteInputValue = (event, e) => {
    event.preventDefault()
    this.props.removeValue.removeValue(e)
    
  }

  render() {

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <Counter />
        <input type='text' value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} />
        <button onClick={this.addInputValue}>
          Click me!
        </button>
        <ul>
        {this.props.values.map((res,i)=> 
          <li key={i}>{res.text} <a href={i} onClick={e => this.deleteInputValue(e, res.id)}>X</a></li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  values : store.clickState,
})

const mapDispatchToProps = dispatch => ({
  clickButton: bindActionCreators(clickButton, dispatch),
  removeValue: bindActionCreators(removeValue, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
