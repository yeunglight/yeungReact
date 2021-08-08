import React from 'react';
import store from '../../store';
import { REDUX_TEST, REDUX_TEST1 } from '../../store/actionType';

interface PropsType {

}
interface StateType extends PropsType {
    current: string;
}

class Redux1 extends React.Component<PropsType, StateType> {
    state = {
        current: '1',
    }

    componentDidMount() {
        store.subscribe(() => {
            const current = store.getState()[REDUX_TEST];
            this.setState({ current });
        })
        this.aa()
    }
    render() {
        return <div>redux1 {this.state.current}</div>
    }
    aa() {
        var obj = {
            a: 1, b: 2, c: 4,
            d: {
                a: 1, b: 2, c: 4
            }
        }
        var { a, ...x } = obj;
        console.log(a, x);
    }
}
export default Redux1;