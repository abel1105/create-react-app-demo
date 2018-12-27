import React from 'react';
import PropTypes from 'prop-types';
import s from './App.module.css';

class UserList extends React.Component {
  static propTypes = {

  };

  render() {
    return (
      <ul>
        {
          this.props.users.map(user => (
            <li key={user.id}>
              <img src={user.avatar_url} className={s.image} />
              <span className={s.Span}>{user.login}</span>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default UserList;