import React from 'react';
import DefineStore from '../../utils/defineRedux';
export class TestDefineStore2 extends React.Component {
    state = {
        name: 1,
        name3: 1,
    }
    handelFn = () => {
        let { name } = this.state;
        name++;
        this.setState({ name });
        DefineStore.dispatch({ type: "name", value: name });
    }
    handelFn3 = () => {
        let { name3 } = this.state;
        name3++;
        this.setState({ name3 });
        DefineStore.dispatch({ type: "name3", value: name3 });
    }
    render() {
        return <div>
            <hr />
            TestDefineStore2
            <button onClick={this.handelFn}>add1</button>
            <button onClick={this.handelFn3}>add3</button>
        </div>
    }
}