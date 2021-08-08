import React from "react";
import { FullscreenOutlined } from '@ant-design/icons';
import './index.css';
export class Fullscreen extends React.Component {
    videoUrl = 'https://vip.bljiex.com';
    componentDidMount() {
    }
    defaultStyle = {
        width: '100%',
        height: '500px',
    }
    fullStyle = {
        ...this.defaultStyle,
        with: '100%',
        height: "100%",
    }
    state = {
        iframeStyle: this.defaultStyle,
    }

    fullScreen = () => {
        this.setState({ iframeStyle: this.fullStyle });
        const element = document.querySelector('.container');
        if (element) {
            element.requestFullscreen();
        }
    }
    render() {
        return <>
            <div className="container">
                <iframe src={this.videoUrl} {...this.state.iframeStyle}
                    allowFullScreen
                ></iframe>

            </div>
            <div>
                <FullscreenOutlined style={{ cursor: "pointer" }}
                    onClick={this.fullScreen}
                />
            </div>
        </>
    }
}