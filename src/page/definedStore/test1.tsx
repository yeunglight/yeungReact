import React from 'react';
import DefineStore from '../../utils/defineRedux';
export class TestDefineStore1 extends React.Component {
    state = {
        name: '',
    }
    componentDidMount() {
        DefineStore.subscribe((state: any) => {
            this.setState({ name: state.name.value });
        })
    }
    render() {
        return <div>
            TestDefineStore1     {this.state.name}
        </div>
    }
}