// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  refreshNumber = () => {
    this.setState(prevCount => ({
      count: prevCount.count + Math.round(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    let numberType
    if (count % 2 === 0) {
      numberType = 'Even'
    } else {
      numberType = 'Odd'
    }

    return (
      <div className="EvenOddApp">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="odd-or-even">Count is {numberType}</p>
          <button type="button" className="button" onClick={this.refreshNumber}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
