import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import MainView from './MainView'
import Whoops404 from './Whoops404'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: getMuiTheme(darkBaseTheme)
    }
  }

  onSetDarkTheme = () => {
    console.log("App.js -> onSetDarkTheme")
    this.setState({
      theme: getMuiTheme(darkBaseTheme)
    })
  }

  onSetLightTheme = () => {
    console.log("App.js -> onSetLightTheme")
    this.setState({
      theme: getMuiTheme(lightBaseTheme)
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.theme}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ MainView } />
              <Route exact path="/settings" render={ (props) => <MainView onSetDarkTheme={this.onSetDarkTheme} onSetLightTheme={this.onSetLightTheme} {...props} /> } />
              {/* <Route exact path="/settings" onSetDarkTheme={this.onSetDarkTheme} onSetLightTheme={this.onSetLightTheme} component={ MainView } /> */}
              <Route path="*" component={ Whoops404 } />
            </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App;
