import React, { Component } from 'react';
import s from './App.module.css';
import _ from 'lodash';
import UserList from '../UserList/UserList';
import { connect } from 'react-redux';
import { fetchGithubUserAsync, setUserInput } from '../../../Redux/Actions/UsersActions';

class App extends Component {

  constructor (props) {
    super(props);

    this.debounceInputChange = _.debounce(this.props.fetchGithubUserAsync, 1000);
  }

  onInputChange = e => {
    const { value } = e.target;
    this.props.setUserInput(value);
    this.debounceInputChange(value);
  };

  render() {
    const { input, users } = this.props;
    return (
      <div className={s.App}>
        <input className={s.input} value={input} onChange={this.onInputChange}/>
        {users && <UserList users={users}/>}
      </div>
    );
  }
}


/**
 * Redux 綁定
 */
function mapStateToProps(state) {
  return {
    input: state.users.input,
    users: state.users.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUserInput: input => dispatch(setUserInput(input)),
    fetchGithubUserAsync: input => dispatch(fetchGithubUserAsync(input))
  };
}

const WrappedReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default WrappedReduxApp;