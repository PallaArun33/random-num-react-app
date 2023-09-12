// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randNum: 0}

  getRandNum = () => Math.ceil(Math.random() * 100)

  onGetRandomNum = () => {
    const randomNumber = this.getRandNum()
    this.setState({randNum: randomNumber})
  }

  render() {
    const {randNum} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onGetRandomNum}
            >
              Generate
            </button>
          </div>
          <p className="num">{randNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
