import React, { Component, ChangeEvent } from 'react'
import QRCode from "react-qr-code";
import './Input.css'

type TyVelue = {
  velue: null | string
}

export default class Input extends Component<{}, TyVelue> {
  constructor(props: {}) {
    super(props)

    this.state = {
      velue: null
    }
    this.Velue = this.Velue.bind(this)
  }
  Velue(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      velue: event.target.value
    })
    console.log(this.state.velue)
  }
  render() {
    return (
      <>
      <div className="container">
        <div className="qr-code-container">
          <QRCode
            className="qr-code"
            size={256}
            value={this.state.velue || 'https://github.com/Mihuil121?tab=repositories'}
            viewBox={`0 0 256 256`}
          />
        </div>
        <div className="input-container">
          <input type="text" name='input1' onChange={this.Velue} placeholder="Ведите сылку ..." />
        </div>
      </div>
      </>
    )
  }

}

