import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import OptMaterialUIComponents from './OptMaterialUIComponents'
import '../App.css'


const style = {
  marginLeft: 20
}

const ThemeSelector = (props) => (
  <div>
    <RaisedButton label="Light Theme" onClick={props.onSetLightTheme} primary={true} style={style} />
    <RaisedButton label="Dark Theme" onClick={props.onSetDarkTheme} secondary={true} style={style} />
  </div>
)

class OptSettingsContainer extends Component {

  onSetDarkTheme = () => {
    this.props.onSetDarkTheme()
  }

  onSetLightTheme = () => {
    this.props.onSetLightTheme()
  }

  render() {
    return (
      <div  style={{
        padding: '10px',
        width: '97%'
      }} className='App-container'>
        <div>
          <h3>Theme Selector</h3>
          <ThemeSelector onSetLightTheme={this.onSetLightTheme} onSetDarkTheme={this.onSetDarkTheme} />
        </div>
        <div>
          <h3>Sample Components</h3>
          <OptMaterialUIComponents />
        </div>
      </div>
    );
  }
}

export default OptSettingsContainer
