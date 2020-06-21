import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import OddComponent from './components/OddComponent';
import EvenComponent from './components/EvenComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      myState: "TBD",
      myHeader: null,
    };
  }

  onPushMe = () => {
    console.log("You pushed me");
    this.counter++;
    console.log(this.counter);
    this.setState({
      myState: " The number is " + this.counter
    });
    console.log(this.counter % 2);
    (this.counter % 2 ) ? this.setState({ myHeader: <OddComponent /> }) : this.setState({ myHeader: <EvenComponent /> }); 
  }

  render () {
    return (
      <div className="App">
        <MyComponent
          whatToSay="Whatever!"
          onPushMe={this.onPushMe}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.onPushMe}>
            Push Me (from app.js)
          </button>
          <h1>I am in control of this application and my name is Shiraz </h1>
          <h1>{this.state.myState}</h1>
          {this.state.myHeader}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
