import React, { Component } from 'react';
import s from './App.module.css';
import _ from 'lodash';
import UserList from '../UserList/UserList';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = { input: "", users: [] };

    this.debounceInputChange = _.debounce(this.fetchUsers, 1000);
  }

  onInputChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    }, () => {
      this.fetchUsers();
    });
    // this.debounceInputChange();

  };

  fetchUsers = () => {
    const { input } = this.state;
    const url = `https://api.github.com/search/users?q=${input}&access_token=4c345b8678cd44482435fb3ec3040f6d6d40fd7d`;
    fetch(url).then(response => {
      return response.json()
    }).then(data => {
      console.log(data);
      this.setState({ users: data.items });
    });
  };

  render() {
    const { input, users } = this.state;
    return (
      <div className={s.App}>
        <input className={s.input} value={input} onChange={this.onInputChange}/>
        {users && <UserList users={users}/>}
      </div>
    );
  }
}

export default App;
