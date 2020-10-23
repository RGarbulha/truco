import { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';

import "./styles/Main.scss"
import Main from './components/Main'


class Menu extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/main">Start</Link><br />
        <Link to="/settings">Settings</Link>

      </div>
    )
  }
}

class Settings extends Component {
  render() {
    return (<h1>Settings</h1>)
  }
}


function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => (
        <Menu />
      )} />
      <Route exact path='/main' render={() => (
        <Main />
      )} />
      <Route exact path='/settings' render={() => (
        <Settings />
      )} />
    </Switch>
  );
}

export default App;
