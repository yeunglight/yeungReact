import React from 'react';
import logo from './logo.svg';
import './App.css';
import Redux2 from './component/redux2';
import Redux1 from './component/redux1';
import ReactRedux1 from './component/react-redux1';
import ReactRedux2 from './component/react-redux2';
import FlexComponent from './component/flex';
import { Utils } from './utils/utils';
import { TestDefineStore1 } from './page/definedStore/test1';
import { TestDefineStore2 } from './page/definedStore/test2';
import { TestDefineStore3 } from './page/definedStore/test3';
import { Fullscreen } from './component/full-screen';
import Item from '_antd@4.16.11@antd/lib/list/Item';
import { Form, Input, Modal, notification } from '_antd@4.16.11@antd';
type User = {
  id: string;
  password: string;
}
const UserList: User[] = [
  {
    id: '441074833',
    password: '123',
  }
];
type StateType = {
  id: string | null;
  password: string;
  isLogin: boolean;
}
class App extends React.Component<{}, StateType> {
  state = {
    id: null,
    password: '',
    isLogin: false,
  }
  componentDidMount() {
    const id = window.sessionStorage.getItem('id');
    const password = window.sessionStorage.getItem('password');
    const isLogin = !!(UserList.filter((item: User) => item.id === id && item.password === password).length);
    this.setState({ isLogin });
  }

  Login = () => {
    return <Modal title="login" visible={!this.state.isLogin} onOk={this.handleOk} onCancel={this.editPassword}>
      <Form.Item
        label="Username"
        name="username"
      >
        <Input onChange={this.editName} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
      >
        <Input.Password onChange={this.editPassword} />
      </Form.Item>
    </Modal>
  }
  openNotificationWithIcon = (type: 'success' | 'error', tips: string) => {
    notification[type]({
      message: type,
      description: tips,
    });
  };
  handleOk = () => {
    const { id, password } = this.state;
    if (!id || !password) {
      this.openNotificationWithIcon('error', 'Please check password or username');
      return;
    }
    const isLogin = !!(UserList.filter((item: User) => item.id === id && item.password === password).length);
    if (isLogin) {
      this.openNotificationWithIcon('success', 'success');
      window.sessionStorage.setItem('id', id || '');
      window.sessionStorage.setItem('password', password || '');
      const isLogin = true;
      this.setState({ isLogin })
    } else {
      this.openNotificationWithIcon('error', 'Please check password or username');
    }
  }
  editName = (event: any) => {
    const id = event.target.value;
    this.setState({ id })
  }
  editPassword = (event: any) => {
    const password = event.target.value;
    this.setState({ password })
  }

  render() {

    return this.state.isLogin ? (
      <div className="App" >
        <header className="App-header">
          {/* <Redux2></Redux2>
        <Redux1></Redux1>
        <hr />
        <ReactRedux1></ReactRedux1>
        <ReactRedux2></ReactRedux2> */}
          {/* <FlexComponent></FlexComponent> */}
          {/* <TestDefineStore1></TestDefineStore1>
        <TestDefineStore2></TestDefineStore2>
        <TestDefineStore3></TestDefineStore3> */}
        </header>
        <Fullscreen></Fullscreen>
      </div>
    ) : this.Login();
  }
}

export default App;

