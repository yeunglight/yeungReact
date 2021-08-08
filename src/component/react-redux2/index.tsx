import React from "react";
import { connect } from 'react-redux';
import { REDUX_TEST, REDUX_TEST1 } from "../../store/actionType";
import { ActionType, StoreDeafultType } from "../../store/reducer";
interface PropsType {
    reduxTest: string,
    add?: Function,
    reduce?: Function,
}
interface StateType extends PropsType {
    reactReduxValue: number,
}

class ReactRedux2 extends React.Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props);
        this.state = {
            ...props,
            reactReduxValue: 1,
        }
    }
    add = () => {
        let { reactReduxValue } = this.state;
        reactReduxValue++;
        this.setState({ reactReduxValue })
        this.props.add && this.props.add({ type: REDUX_TEST1, value: reactReduxValue });
    }

    reduce = () => {
        let { reactReduxValue } = this.state;
        reactReduxValue--;
        this.setState({ reactReduxValue })
        this.props.reduce && this.props.reduce({ type: REDUX_TEST1, value: reactReduxValue });
    }

    render() {
        return <div style={{ width: "100%" }}>
            <hr />
            React-redux2
            <div>{this.props.reduxTest}</div>

            <button onClick={this.add}>add</button>
            <button onClick={this.reduce}>reduce</button>
            <span>{this.state.reactReduxValue}</span>
        </div>
    }
}

const mapStateToProps = (state: StoreDeafultType) => {
    return {
        reduxTest: state[REDUX_TEST1]
    }
}
function mapDispatchToProps(dispatch: any) {
    return {
        add: (action: ActionType) => {
            dispatch(action)
        },
        reduce: (action: ActionType) => {
            dispatch(action)
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux2)
