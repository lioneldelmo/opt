import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import HomeIcon from 'material-ui/svg-icons/action/home'
import SettingsIcons from 'material-ui/svg-icons/action/settings'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import { Link } from 'react-router-dom'
import '../App.css';

class Login extends Component {
  static muiName = 'FlatButton'
  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    )
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)
Logged.muiName = 'IconMenu'

const ToolBarRight = () => (
  <div>
    <Link to='/'>
      <FlatButton
        // style={{
        //   color: 'white'
        // }}
       label="Home"
       labelPosition="after"
       icon={<HomeIcon />}
     />
    </Link>
    <Link to='/settings'>
      <FlatButton
        // style={{
        //   color: 'white'
        // }}
       label="Settings"
       labelPosition="after"
       icon={<SettingsIcons />}
     />
    </Link>
  </div>
)

const TitlePanel = (props) => (
    <div>
      <span>{props.text}</span>
    </div>
)

class OptAppBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logged: true
    };
  }

  handleChange = (event, logged) => {
    this.setState({logged: logged})
  }

  render() {
    var style = {
      position: 'fixed',
      top: 0
    }
    return (
        <AppBar
          style={style}
          title={<TitlePanel text="Operation Planning Tool" />}
          iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
          iconElementRight={<ToolBarRight />}
          onLeftIconButtonTouchTap={this.props.toggleDrawer}
        />
    );
  }
}

export default OptAppBar;
