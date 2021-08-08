import React, { ChangeEvent } from 'react';
import store from '../../store';
import { REDUX_TEST, REDUX_TEST1 } from '../../store/actionType';

interface PropsType {

}
interface StateType extends PropsType {
    current: string;
}

class Redux2 extends React.Component<PropsType, StateType> {
    state = {
        current: '1',
    }

    setValue = (event: ChangeEvent<HTMLInputElement>) => {
        const current = event.target.value;
        this.setState({ current });
        store.dispatch({ type: REDUX_TEST, value: current });
    }
    render() {
        return <div>
            <input type="text" defaultValue={this.state.current} onChange={this.setValue} />
        </div>
    }
}
export default Redux2;