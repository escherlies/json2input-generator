import React, { Component } from 'react';
import Generator from './Generator'

class App extends Component {
  state = {
    user: {
      name: 'string',
      email: 'string',
    },
    user2: {
      name: 'string',
      email: 'string',
    },
    superuser: {
      canItHandleArray: [
        "yes",
        "it",
        {
          wtf: 'can'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Generator
          data={this.state}
          submitHandle={data => { console.log(data) }}
        />
      </div>
    );
  }
}

export default App;

