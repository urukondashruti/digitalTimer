import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {min: 25, sec: 60, But1: false, count1: 25}

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timeId)

  onBut = () => {
    const {But1} = this.state
    if (But1 === true) {
      this.clearTimerInterval()
    } else {
      this.timeId = setInterval(this.tick, 1000)
    }
    this.setState(prevState => ({But1: !prevState.But1}))
  }

  tick = () => {
    const {min, sec} = this.state
    if (sec === 60) {
      this.setState(prevState => ({min: prevState.min - 1}))
    }
    if (min === 0 && sec === 1) {
      this.clearTimerInterval()
    }
    if (sec === 0) {
      this.setState({sec: 60})
      this.setState(prevState => ({min: prevState.min - 1}))
    }
    this.setState(prevState => ({sec: prevState.sec - 1}))
  }

  onBut1 = () => {
    const {count1} = this.state
    this.clearTimerInterval()
    this.setState(prevState => ({But1: !prevState.But1}))
    this.setState({min: count1})
    this.setState({sec: 0})
  }

  onBut2 = () => {
    const {min, But1} = this.state
    if (But1 === false && min > 1) {
      this.setState(prevState => ({min: prevState.min - 1}))
      this.setState(prevState => ({count1: prevState.count1 - 1}))
    }
  }

  onBut3 = () => {
    const {But1} = this.state
    if (But1 === false) {
      this.setState(prevState => ({min: prevState.min + 1}))
      this.setState(prevState => ({count1: prevState.count1 + 1}))
    }
  }

  render() {
    const {min, sec, But1, count1} = this.state
    const str2 = min < 10 ? `0${min}` : `${min}`
    let str3 = sec < 10 ? `0${sec}` : `${sec}`
    if (sec === 60) {
      str3 = '00'
    }

    const imgUrl1 = But1
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const alt1 = But1 ? 'pause icon' : 'play icon'
    const val1 = But1 ? 'Pause' : 'Start'
    const val2 = But1 ? 'Running' : 'Paused'
    return (
      <div className="back">
        <h1>Digital Timer</h1>
        <div className="div1">
          <div className="con">
            <div className="con1">
              <h1>
                {str2}:{str3}
              </h1>
              <p>{val2}</p>
            </div>
          </div>
          <div className="con6">
            <div className="con4">
              <div className="con3">
                <button type="button" className="but1" onClick={this.onBut}>
                  <img src={imgUrl1} alt={alt1} className="img1" />
                  <p>{val1}</p>
                </button>
              </div>
              <div className="con3">
                <button type="button" className="but1" onClick={this.onBut1}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="img1"
                  />
                  <p>Reset</p>
                </button>
              </div>
            </div>
            <div>
              <p>Set Timer limit</p>
              <div className="con5">
                <button type="button" className="but" onClick={this.onBut2}>
                  -
                </button>
                <div className="div7">
                  <p>{count1}</p>
                </div>
                <button type="button" className="but" onClick={this.onBut3}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
