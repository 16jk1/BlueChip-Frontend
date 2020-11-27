import React, { Component } from 'react'
import Briggs from '../result/Briggs'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBriggsResult: true
    }
  }

 
  renderBriggsResult() {
    return <Briggs resultBriggs={this.props.resultBriggs} />
  }

  render() {
    let showBriggsResult = this.state.showBriggsResult
    if (showBriggsResult) {

      return this.renderBriggsResult()
    }
  }

}

export default Results
