import React, { Component } from 'react'
import AcUnit from 'react-icons/lib/md/ac-unit'
import logo from 'react-icons/lib/fa/calendar'

import OptAppBar from './sub/OptAppBar'
import OptMainDrawer from './sub/OptMainDrawer'
import OptHomeContainer from './sub/OptHomeContainer'
import OptSettingsContainer from './sub/OptSettingsContainer'

import './App.css'


class MainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
        mainDrawerOpen: false
    }

    // this.toggleDrawer = this.toggleDrawer.bind(this)
    // this.onDrawerRequestChange = this.onDrawerRequestChange.bind(this)
  }

  toggleDrawer = () =>  {
    this.setState({
      mainDrawerOpen: !this.state.mainDrawerOpen
    })
  }

  onDrawerRequestChange = (open) => {
    this.setState({
      mainDrawerOpen: open
    })
  }

  render() {
    return (
      <div>
        <OptAppBar toggleDrawer={this.toggleDrawer}/>
        <OptMainDrawer onDrawerRequestChange={this.onDrawerRequestChange} show={this.state.mainDrawerOpen}  />
        {(this.props.location.pathname === "/") ?
            <OptHomeContainer /> :
         (this.props.location.pathname === "/settings") ?
            <OptSettingsContainer onSetDarkTheme={this.props.onSetDarkTheme} onSetLightTheme={this.props.onSetLightTheme} /> :
            <OptHomeContainer />
        }
      </div>
    );
  }
}

export default MainView;
