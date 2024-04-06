import React, { Component } from 'react'
import VelueInput from '../Input/Input.tsx'
import QRCode from "react-qr-code";

interface QRCodeProps {
    value: string | null;
  }

export default class Qr extends Component<{QRCodeProps }> {
    render() {
        return (
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={value || ''}
                    viewBox={`0 0 256 256`}
                />
            </div>
        )
    }
}
