import React,{Component} from 'react';
import 'styles/index.scss';
import Dashboard from 'pages/dashboard';


class App extends Component {
  render() {
    return (
      <div>
        <Dashboard {...this.props} />
      </div>
    );
  }
}

export default App;

