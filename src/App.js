import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Sidebar from './components/sidebar/Sidebar';




class App extends React.Component {

  render() {
    return (

      <div>
        <div class="navbar-fixed">
          <nav>
            <Sidebar />
          </nav>
        </div>

      </div>
    )
  }
}
export default App;

