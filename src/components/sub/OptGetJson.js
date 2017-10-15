import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import JsonView from 'react-pretty-json'
import './css/json-view.css'
import '../App.css'


class OptGetJson extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      localWebApiUrl: '/data/mission.json',
      externalWebApiUrl: window.REACT_APP_WEBAPI_URL
    }
  }

  getData = (e) => {
    let url = e.currentTarget.dataset.url
    axios.get(url)
          .then((result) => {
              this.setState({
                data: result.data
              })
            }, (error) => {
              this.setState({
                data: error
              })
              console.log(error)
            })
  }

  render() {
    let style = {
      color: 'lime',
      padding: '5px',
      backgroundColor: '#121212',
      border: '1px solid lime'
    }
    return (
      <div style={{
        padding: '20px'
      }}>
        <div style={style}>
          <h4>Demonstration on getting data via AJAX call</h4>
          <RaisedButton primary={true} onClick={this.getData} data-url={this.state.localWebApiUrl} label="Get Data (local)" />&nbsp;
          <RaisedButton primary={true} onClick={this.getData} data-url={this.state.externalWebApiUrl} label="Get Data (galaxy)" />
          <h4>Result:</h4>
          <JsonView json={this.state.data} />
        </div>
      </div>
    );
  }
}

export default OptGetJson
