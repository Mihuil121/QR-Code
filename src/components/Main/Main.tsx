import React, { Component } from 'react'
import Input from '../Input/Input.tsx'
import './Main.css'

export default class Main extends Component {
    render() {
        return (
            <div>
            <div className="Qr-text">
                QR Code
            </div>
            <div className="Input">
                <Input />
            </div>
        </div>
        )
    }
}
