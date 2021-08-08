import React from 'react';
import DefineStore from '../../utils/defineRedux';
export class TestDefineStore3 extends React.Component {
    state = {
        name: '',
    }
    componentDidMount() {
        DefineStore.subscribe((state: any) => {
            this.setState({ name: state.name3.value });
        })
    }
    render() {
        return <div>
            <hr />
            TestDefineStore3     {this.state.name}
        </div>
    }
}