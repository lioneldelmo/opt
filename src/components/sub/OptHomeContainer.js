import React, {Component} from 'react'
import OptMaterialUIComponents from './OptMaterialUIComponents'
import OptGetJson from './OptGetJson'
// import OptVisContainer from './OptVisContainer'

import '../App.css'

class OptHomeContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let style = {
      backgroundColor: 'white'
    }
    return (
      <div style={style} className="App-container-full">
          <OptGetJson />
          {/* <OptVisContainer /> */}
          <OptMaterialUIComponents />
      </div>
    );
  }
}

export default OptHomeContainer
