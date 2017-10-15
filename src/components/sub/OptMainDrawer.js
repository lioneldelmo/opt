import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import '../App.css';

class OptMainDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: props.show
    }

    // this.onDrawerRequestChange = this.onDrawerRequestChange.bind(this)
  }

  componentWillMount() {
    console.log("Drawer - componentWillMount")
  }

  componentDidMount() {
    console.log("Drawer - componentDidMount")
  }

  componentWillReceiveProps(newProps) {
    console.log("Drawer - componentWillReceiveProps", newProps)
    this.setState({open: newProps.show})
  }

  componentWillUpdate(newProps, nextState) {
    console.log("Drawer - componentWillUpdate", newProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Drawer - componentDidUpdate", prevProps, prevState)
  }

  componentWillUnmount() {
    console.log("Drawer - componentWillUnmount")
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
    this.props.onDrawerRequestChange(this.state.open)
    console.log("handleToggle", this.state.open)
  }

  handleClose = () => {
    this.setState({open: false});
    this.props.onDrawerRequestChange(false)
    console.log("handleClose", this.state.open)
  }

  onDrawerRequestChange = (open) => {
    this.setState({
      open: open
    })
    this.props.onDrawerRequestChange(open)
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={this.onDrawerRequestChange}
        >
          <AppBar
            title={<span>OPT</span>}
            iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
            onLeftIconButtonTouchTap={this.handleClose}
          />
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default OptMainDrawer
