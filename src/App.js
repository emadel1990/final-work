import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Sidebar from './components/sidebar/Sidebar';
import './css/app.css';




class App extends React.Component {



  render() {
    return (

      <div className="app">

        <Sidebar />

      </div>
    )
  }
}
export default App;

