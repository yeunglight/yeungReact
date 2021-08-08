import React from 'react';
import './index.css';
export default class FlexComponent extends React.Component {
    state = {
        type: true
    }
    onChange = () => {
        this.setState({ type: !this.state.type });
    }
    test1() {
        return <div>
            <div className={`flex-item ${this.state.type ? "flex-item-col" : "flex-item-row"}`}>1</div>
            <div className={`flex-item ${this.state.type ? "flex-item-col" : "flex-item-row"}`}>2</div>
            <div className={`flex-item ${this.state.type ? "flex-item-col" : "flex-item-row"}`}>3</div>
        </div>
    }
    test2() {
        return <div>
            <div className={`flex-item ${this.state.type ? "flex-item-col" : "flex-item-row"}`}>1</div>
            <div className={`flex-item ${this.state.type ? "flex-item-col" : "flex-item-row"}`}>2</div>
            <div className={`flex-item ${this.state.type ? "flex-item-col" : "flex-item-row"}`}>3</div>
        </div>
    }
    render() {
        return <div>
            <div className={this.state.type ? "flex-container" : "normal-container"}>
                <div className={`flex-item ${this.state.type ? "flex-item-col" : "flex-item-row"}`}>1</div>
                <div className={`flex-item ${this.state.type ? "flex-item-col" : "flex-item-row"}`}>2</div>
                <div className={`flex-item ${this.state.type ? "flex-item-col" : "flex-item-row"}`}>3</div>
                {/* {
                    this.state.type === true
                        ? this.test1()
                        : this.test2()
                } */}
            </div>
            <button onClick={this.onChange}>change</button>

        </div>
    }
}